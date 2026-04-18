// server.js — Hostinger Node.js static file server
// Deploy this repo to Hostinger Node.js hosting
// Set start command to: node server.js

const http = require('http');
const fs   = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

function serveFile(res, filePath) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 — Page Not Found</h1><p><a href="/">Return Home</a></p>');
      return;
    }
    var ext  = path.extname(filePath).toLowerCase();
    var mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
}

var server = http.createServer(function (req, res) {
  var urlPath = req.url.split('?')[0]; // strip query strings

  // remove trailing slash (except root)
  if (urlPath !== '/' && urlPath.endsWith('/')) {
    urlPath = urlPath.slice(0, -1);
  }

  // URL → file path mapping (matches rsddirect.com URL structure)
  var routeMap = {
    '/':                          'index.html',
    '/domestic-direct':           'pages/domestic-direct.html',
    '/made-in-usa-suppliers':     'pages/made-in-usa-suppliers.html',
    '/authorized-reseller-usa':   'pages/authorized-reseller-usa.html',
    '/about':                     'pages/about.html',
    '/contact':                   'pages/contact.html',
  };

  var mapped = routeMap[urlPath];
  var filePath;

  if (mapped) {
    filePath = path.join(__dirname, mapped);
  } else {
    // serve static assets (css, js, images etc.) directly
    filePath = path.join(__dirname, urlPath);
  }

  serveFile(res, filePath);
});

server.listen(PORT, function () {
  console.log('RSD Direct running on port ' + PORT);
});
