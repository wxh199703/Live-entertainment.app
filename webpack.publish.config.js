

const path=require('path')

const webpack=require('webpack')

const htmlWebpackPlugin= require('html-webpack-plugin')





const {CleanWebpackPlugin} = require('clean-webpack-plugin')







const extractTextPlugin= require('extract-text-webpack-plugin')

const optimizeCSSAssetsWebpackPlugin=   require('optimize-css-assets-webpack-plugin')
module.exports= {

    entry: {
        app: path.join(__dirname, './src/main.js'),
        vendors: ['jquery', 'bootstrap', 'mint-ui']
    },


    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/index.js'
    },

    plugins: [
        








        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),

            filename: 'index.html',




            minify: {
                removeComment: true,
                collapseWhitespace: true
                // removeAttributeQuotes: true
            }
        }),




        new CleanWebpackPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'js/vendors.js'
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
            
        }),

        // new webpack.DefinePlugin({






        //     'process.env.NODE_ENV': "production",
        // }),

        new extractTextPlugin('css/style.css'),









        







        




        new optimizeCSSAssetsWebpackPlugin()
    ],

    module: {

        




        rules: [
            { test: /\.css$/, use: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader'],
                publicPath: '../'
            })},

            // { test: /\.css$/, use: ['style-loader', 'css-loader']},

            {    test: /\.less$/, use: extractTextPlugin.extract({
                 fallback: 'style-loader',
                 use: ['css-loader', 'less-loader'],
                 publicPath: '../'
            })},

            // { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},

            {            test: /\.scss$/, use: extractTextPlugin.extract({
                         fallback: 'style-loader',
                         use: ['css-loader', 'sass-loader'],
                         publicPath: '../'
            })},

            // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},

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