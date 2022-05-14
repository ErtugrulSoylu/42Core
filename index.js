'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(1453, function () {
  console.log('Sunucu çalışıyor...');
});