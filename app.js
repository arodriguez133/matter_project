import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import webpackkDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webPackConfig from './webpack.config.js'; 
import webpackHotMiddleware from 'webpack-hot-middleware';

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compiler = webpack(webPackConfig);
const app = express();

app.use(webpackkDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, 'dist'), {index: false}));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Matter js app listening on ${PORT}`);
});

