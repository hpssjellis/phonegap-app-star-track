var phonegap = require('phonegap');                      

phonegap.serve({
  port: process.env.PORT || 3000, // optional
  autoreload: true, // optional
  localtunnel: false, // optional (no point with Heroku)
  browser: true
}, function(e) {
  console.log((e) ? e.message : 'server is running');
});
