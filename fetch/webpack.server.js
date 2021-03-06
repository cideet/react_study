/**
 * Created by sf on 2017/8/6.
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server.js',
        'webpack-dev-server/client?http://localhost:1999',
        './src/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),       //绝对路径
                query: {presets: ['latest', 'react']}
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['url-loader?limit=80000&name=assets/[name]-[hash:5].[ext]', 'img-loader']
            },
            // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            // { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        require('autoprefixer')({
                            browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
                        })
                    ]
                }
            }
        }),

        new htmlWebpackPlugin({
            template: './src/index.html'
        }),

        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),

        // 自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:1999'
        })
    ],

    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:9527',
                secure: true
            }
        },
        // contentBase: "./public", //本地服务器所加载的页面所在的目录
        // colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转

        // inline: true, //实时刷新
        // hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }

    // devServer: {
    //     // historyApiFallback: true,    //不跳转
    //     hot: true,
    //     inline: true
    // }
};


/**
 * Created by zhangsanfeng on 2017/6/26.
 */
//
// var fs = require('fs');
// var path = require('path');
// var webpack = require('webpack');
// var htmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//
// module.exports = {
//     entry: [
//         'webpack/hot/dev-server.js',
//         'webpack-dev-server/client?http://localhost:3000',
//         './src/index.jsx'
//     ],
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'js/[name].bundle.js'
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.(js|jsx)$/,
//                 loader: 'babel-loader',
//                 include: path.resolve(__dirname, 'src'),
//                 exclude: path.resolve(__dirname, 'node_modules'),       //绝对路径
//                 query: {presets: ['latest','react']}
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
//             },
//             {
//                 test: /\.less$/,
//                 loader: 'style-loader!css-loader!postcss-loader!less-loader'
//             },
//             {
//                 test: /\.scss$/,
//                 loader: 'style-loader!css-loader!postcss-loader!sass-loader'
//             },
//             {
//                 test: /\.html$/,
//                 loader: 'html-loader'
//             },
//             {
//                 test: /\.tpl$/,
//                 loader: 'ejs-loader'
//             },
//             {
//                 test: /\.(jpe?g|png|gif|svg)$/i,
//                 loaders: ['url-loader?limit=80000&name=assets/[name]-[hash:5].[ext]', 'img-loader']
//             }
//         ]
//     },
//
//     plugins: [
//         new webpack.LoaderOptionsPlugin({
//             options: {
//                 postcss: ()=> {
//                     return [
//                         require('autoprefixer')({
//                             browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
//                         })
//                     ]
//                 }
//             }
//         }),
//
//         new htmlWebpackPlugin({
//             template: './src/index.html'
//         }),
//
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: JSON.stringify('production')
//             }
//         }),
//
//         // 自动打开浏览器
//         new OpenBrowserPlugin({
//             url: 'http://localhost:3000'
//         })
//     ],
//
//     devServer: {
//         // historyApiFallback: true,    //不跳转
//         hot: true,
//         inline: true
//     }
// };




