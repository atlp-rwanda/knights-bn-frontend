const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(`${__dirname}/`));
app.listen(process.env.PORT || 8080);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}
