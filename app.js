const app = require('express')()

app.get('/', (req, res) =>{
  res.send("Hello from Appsody666.6666!")
});
 
module.exports.app = app;
