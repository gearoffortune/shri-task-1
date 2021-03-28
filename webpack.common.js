const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babel = require('babel-loader');

module.exports = {
    entry: {
        index: './src/main.js',
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: path.resolve(__dirname, 'dist') },
    plugins: [
        new CleanWebpackPlugin(), 
        new CopyPlugin({ patterns: ['assets'] }),

        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
              test: /\.js$/i,
              exclude: /node_modules/,
              use: ['babel-loader'],
            },
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
            {test :/\.svg$/i, type: 'asset/inline', use: 'svgo-loader'},
            { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
