/**
 * Created by xin on 2017/8/11.
 */
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: __dirname + '/node_modules'
            }
        ]
    }
};

module.exports = config;