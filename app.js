const express = require('express')
// const parseurl = require('parseurl')
// const session = require('express-session')
const mustacheExpress = require('mustache-express')

const app = express();
app.engine('mustache',mustacheExpress());
app.set('views','./views')
app.set('view engine', 'mustache')

app.get('/', function (req,res) {
  res.render('login')

})
app.listen(3000, function ()
{
  console.log('Successfully started express application!');
})
