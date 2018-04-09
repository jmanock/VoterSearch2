var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.get('/search', function(req, res){
  var firstName = req.query.firstName;
  var lastName = req.query.lastName;
  var fullName = firstName + ' '+ lastName;

  console.log(fullName);

  var instream = fs.createReadStream('public/voters/2012Florida.txt');
  var outstream = new stream;
  var rl = readline.createInterface(instream, outstream);

  // rl.on('line', function(line){
  //   var results = line.toUpperCase();
  //   console.log(fullName);
  //   if(results.includes(firstName) && results.includes(lastName)){
  //     results = results.split(/[\t]+/);
  //     console.log(results);
  //   }
  // }).on('close', function(){
  //   console.log('All Done Friend!!!');
  // });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
