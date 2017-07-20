var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var session     = require('express-session');
var passport    = require('passport');
var ejs         = require('ejs');

// Connect to the fos MongoDB
mongoose.connect('mongodb://localhost:27017/fos', {
  useMongoClient: true,
  /* other options */
});

// Create our Express application
var app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);