const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: resolve(__dirname, './../src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[folder]__[local]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: resolve(__dirname, './../build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './../public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css',
    }),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, './../src'),
      public: resolve(__dirname, './../public'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  stats: 'errors-only',
}
