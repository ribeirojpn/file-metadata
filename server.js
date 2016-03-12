'use strict'
const http = require('http');
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
var APP_PORT = process.env.PORT ||3000;

app.use(express.static('./'));
app.set('views','./');
app.set('view engine','ejs');

app.get('/', function (req,res) {
  res.render('index');
  res.end();
});

app.post('/filedata', upload.single('data'), function (req,res) {
  console.log(req.file);
  res.json(req.file);
});

http.createServer(app).listen(APP_PORT, () => {
  console.log('Server on...');
});
