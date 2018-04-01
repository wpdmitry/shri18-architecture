const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './src/flux/index',
        './src/flux/app/components/shopping/index.less'
        ],
    output: {
        path: __dirname + '/dist/flux',
        filename: './js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader',
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/index.css'
        })
    ]
};