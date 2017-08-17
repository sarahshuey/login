const express = require('express')
// const parseurl = require('parseurl')
const session = require('express-session')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.engine('mustache',mustacheExpress());
app.set('views','./views')
app.set('view engine', 'mustache')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
const userinfo = [
  {username: 'sarah',
  password: 'shuey'}
]

app.use(function (req, res, next) {
  console.log('in interceptor');
if (req.url == '/login')
  next()
  else if (!req.session.username) {
    res.render('login')
  }
  else {
    next()
  }
})

app.get('/', function (req,res) {
  res.render('home')

})
// app.get('/login', function (req,res) {
//   res.render('login')
//
// })

  app.post('/login', function (req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    userinfo.forEach(function (user) {
      if (user.username === req.body.username && user.password === req.body.password) {
        req.session.username = req.body.username;
        res.render('home');
      } else {
        res.render('login', {error: true});
      }
    })
})
app.listen(3000, function ()
{
  console.log('Successfully started express application!');
})
