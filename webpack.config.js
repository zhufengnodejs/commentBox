var path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'app/main.js'),
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devServer:{
      inline:true,
      contentBase:'build'
    },
    resolve:{
        extensions:["",".js",".jsx",".css"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude:/node_modules/,
                include:path.resolve(__dirname,'app')
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)/,
                loader:'url'
            }
        ]
    }
}