const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({ fileName: 'asset-manifest.json' }),
    new CopyPlugin({
      patterns: [
        { from: 'public/assets/player.js', to: 'public/assets/player.js' },
        { from: 'public/assets/fav', to: 'public/assets/fav' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
  ],
}
