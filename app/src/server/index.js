import express from 'express';

import serverRender from './middleware/renderer';

const PORT = 3000;
const path = require('path');

const app = express();
const router = express.Router();

router.use('^/$', serverRender);

router.use('*', serverRender);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.use(router);

app.listen(PORT, error => {
  if (error) {
    return console.log('something bad happened', error);
  }
  console.log(`app started at localhost:${PORT}`);
});
