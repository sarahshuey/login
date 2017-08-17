const express = require('express')
// const parseurl = require('parseurl')
// const session = require('express-session')
// const mustacheExpress = require('mustache-express')
//
const app = express()


app.get('/', function(req,res) {
  res.send('I am alive')

})
app.listen(3000, function()
{
  console.log('Successfully started express application!');
})
