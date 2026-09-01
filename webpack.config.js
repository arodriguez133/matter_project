import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Matter js',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  entry: {
    main: ['webpack-hot-middleware/client', './src/index.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
