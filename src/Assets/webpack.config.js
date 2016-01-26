/**
 * Created by n0m4dz on 10/20/15.
 */

var Path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackDirs = {
    contextDir: Path.resolve(__dirname, './src/scripts'),
    sassDir: Path.resolve(__dirname, './src/scss'),
    pathDir: Path.join(Path.resolve(__dirname, './dist/')),
    nodeDir: Path.join(Path.resolve(__dirname, './node_modules')),
    logsDir: Path.join(Path.resolve(__dirname, './logs')),
    excludeDir: [/(node_modules|tests|logs)/]
};

module.exports = {
    conf: {
        excludeDir: webpackDirs.excludeDir
    },

    context: webpackDirs.contextDir,

    entry: {
        app: ['./index']
    },

    output: {
        path: webpackDirs.pathDir,
        filename: 'js/[name].js',
        publicPath: '../'
    },


    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin(),

        //Chunk css
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        }),

        new Webpack.BannerPlugin("*************************************\n   Author Tseegii Tselmeg   \n*************************************\n")
    ],

    module: {
        loaders: [
            //SCRIPTS
            {
                test: /\.js$/,
                exclude: webpackDirs.excludeDir,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },

            //SCSS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
            },

            // IMAGES
            {
                test: /\.png($|\?)|\.jpg($|\?)|\.gif($|\?)|\.bmp($|\?)|\.svg($|\?)/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            },

            // FONTS
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
        ]
    },
    sassLoader: {
        includePaths: webpackDirs.sassDir
    },

    resolve: {
        root: [webpackDirs.pathDir],
        alias: {},
        extensions: ['', '.js', '.scss', '.css', '.html']
    },
}

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './build/scripts/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    //loader
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'build')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './build/scss')]
    },

    //Plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
        devFlagPlugin
    ]
};
