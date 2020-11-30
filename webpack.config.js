

const path=require('path')

const webpack=require('webpack')

const htmlWebpackPlugin= require('html-webpack-plugin')

module.exports= {

    entry: path.join(__dirname, './src/main.js'),

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    plugins: [
        








        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),

            filename: 'index.html'
        })
    ],

    module: {

        




        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},

            {    test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},

            {            test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},

            {     test: /\.(jpg|png|gif|bmp|jpeg)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                        name: 'images/[name].[ext]',
                    } 
            },

            



            {   test: /\.(ttf|eot|svg|woff|woff2)/, use: 'url-loader'},





            {         test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},



            


            {         test: /\.vue$/, use: 'vue-loader'}
        ]
    }
}