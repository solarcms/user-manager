/**
 * Created by n0m4dz on 11/11/15.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var compiler = webpack(config);
new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Running at localhost:3000');
    });
