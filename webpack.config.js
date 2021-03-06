const path = require('path')
const glob = require('glob')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src'),
}

const isDev = process.env.NODE_ENV === 'development'

const isProd = !isDev

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash:6].${ext}`)

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
            },
        },
        'css-loader',
    ]

    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

const babelOptions = preset => {
    const options = {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
    }
    if (preset) options.presets.push(preset)
    return options
}

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: babelOptions(),
        },
    ]
    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
}

const optimization = () => {
    //generate optimization objects
    const config = {
        splitChunks: {
            chunks: 'all', //optimization code(no reply), vendors is common between files
        },
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin({ cache: true, parallel: true }),
        ]
    }
    return config
}

const plugins = () => {
    base = [
        new MiniCssExtractPlugin({
            // prepend folder name
            filename: 'style/' + filename('css'),
            chunkFilename: 'style/' + filename('css'),
            ignoreOrder: false,
        }),
        new HTMLWebpackPlugin({
            //auto add tags with src
            template: './index.html',
            favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(), //clean dist folder
        // new CopyWebpackPlugin(),
        new VueLoaderPlugin(),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
            whitelistPatterns: [
                /-(leave|enter|appear)(|-(to|from|active))$/,
                /^(?!(|.*?:)cursor-move).+-move$/,
                /^router-link(|-exact)-active$/,
                /data-v-.*/,
                /^nav/,
                /^card/,
                /^form/,
                /select|input|label/,
            ],
        }),
    ]
    // turn on that when analizer needed after each build
    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }
    return base
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: './js/' + filename('js'),
        chunkFilename: './js/' + filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.svg'],
        alias: {
            // just a alias for path
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: optimization(),
    devServer: {
        port: 8800,
        hot: isDev,
    },
    devtool: isDev ? 'source-map' : '', //add source map to bundle
    plugins: plugins(),
    module: {
        rules: [
            {
                //all imports with these extensions will be processed with this loaders
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.s[ac]ss$/, //regexp sass scss
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img', //might be a problem like with fonts
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:6].[ext]',
                        publicPath: '../',
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
}
