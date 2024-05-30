var express = require('express');
var router = express.Router();

const messages = [
  {
    text : "Hi there",
    user : "Amando",
    added : `${new Date().getDate()}\/${new Date().getMonth()}/${new Date().getFullYear()}`
  },
  {
    text : "Hello world",
    user: "Kevin",
    added : `${new Date().getDate()}\/${new Date().getMonth()}/${new Date().getFullYear()}`
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages : messages});
});

router.get("/new", function(req,res, next) {
  res.render('new');
})

router.post("/new", (req, res,next) => {
  messages.push({text:req.body.message, user:req.body.author, added:`${new Date().getDate()}\/${new Date().getMonth()}/${new Date().getFullYear()}`});
  res.redirect('/');
})

module.exports = router;