const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const env = process.env.NODE_ENV;
const __DEV__ = env === 'development';
const __PRODUCTION__ = env === 'production';

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const config = {
    context: paths.src,

    entry: {
        app: './index'
    },

    output: {
        path: paths.dist,
        filename: __PRODUCTION__ ? '[name].bundle.[chunkhash].js' : '[name].bundle.js',
        chunkFilename: __PRODUCTION__ ? '[name].bundle.[chunkhash].js' : '[name].bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        extractLess
    ]
};

if (__DEV__) {
    config.devtool = 'inline-source-map';
}

if (__PRODUCTION__) {
    config.plugins.push(new CleanWebpackPlugin(['dist']));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;