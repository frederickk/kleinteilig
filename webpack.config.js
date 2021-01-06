const path = require('path');
const {request} = require('http');
const webpack = require('webpack');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const data = {
};

const loadJSONData = (data) => {
  let output = [];

  Object.keys(data).map((key) => {
    output.push({
      from: `./src/index.njk`,
      to: `./${key}/index.html`,
      context: {
        data: data[key],
        request: {
          url: `${key}`,
        }
      }
    });
  });

  return output;
}

module.exports = {
  mode: (process.env.NODE_ENV === 'production')
    ? 'production'
    : 'development',
  entry: {
    index: [
      path.join(__dirname, 'src/index'),
      path.join(__dirname, 'src/index.scss'),
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
        test: /\.(ts|tsx)?$/i,
        use: 'ts-loader',
        exclude: [/node_modules/],
      }, {
        test: /\.html$/,
        use: 'html-loader',
      }, {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'lit-element-scss-loader',
          'extract-loader',
          'css-loader',
          'sass-loader'
        ],
        include: [
          path.resolve(__dirname, 'src/components')
        ],
      }, {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: [
          path.resolve(__dirname, 'src/components')
        ],
      }, {
        test: /manifest\.(json)$/i,
        type: 'asset/resource',
      }, {
        test: /\.(png|jpg|jpe?g|gif)$/i,
        type: 'asset/resource',
      }, {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    new NunjucksWebpackPlugin({
      // TODO(frederickk): Determine how to pass request object to templates.
      templates: [{
        from: './src/index.njk',
        to: './index.html',
        context: {
          request: {
            url: '',
          }
        },
      }, ...loadJSONData(data)],
      configure: {
        watch: true,
      },
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/images'),
        to: 'images',
        globOptions: {
          ignore: ['*.DS_Store'],
        },
      }, {
        from: path.posix.join(
          path.resolve(__dirname, 'src').replace(/\\/g, '/'), 'manifest.json'
        ),
        to: '[name].[ext]',
        noErrorOnMissing: true,
      }],
    }),
  ],
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    filename: 'index.js',
    hot: true,
    liveReload: true,
    port: 8080,
    watchContentBase: true,
    writeToDisk: true,
  },
  output: {
    assetModuleFilename: 'images/[name][ext]',
    filename: 'index.js',
    publicPath: './dist',
  },
};