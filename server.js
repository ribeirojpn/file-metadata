'use strict'
const http = require('http');
const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.static('./'));
app.set('views','./');
app.set('view engine','ejs');

app.get('/', function (req,res) {
  res.render('index');
  res.end();
});

app.post('/filedata',function (req,res) {
  res.end();
})

http.createServer(app).listen(3000, () => {
  console.log('Server on...');
});
