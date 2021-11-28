const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: false,
                    },
                  },
                ],
              },
            {
                test: /\.(png|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    minetype: 'image/png'
                }
            },
            {

                test: /\.(jpg|svg|pdf)$/,
                loader: 'file-loader'
            },
            {
                test: [/\.jsx?/, /\.es6/],
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-react', { targets: "defaults" }]
                    ]
                  }
                }
            }
        ],

    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
};
