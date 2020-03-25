const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody666!");
});
 
module.exports.app = app;
