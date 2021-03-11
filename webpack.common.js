const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babel = require('babel-loader');

module.exports = {
    entry: {
        index: './src/activity/index.js',
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: path.resolve(__dirname, 'dist') },
    plugins: [
        new CleanWebpackPlugin(), 
        // new CopyPlugin({ patterns: ['public'] }),
        new HtmlWebpackPlugin({ filename: 'index.html', chunks: ['index'], template: 'src/index.html', title: 'test' }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
              test: /\.js$/i,
              exclude: /node_modules/,
              use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
