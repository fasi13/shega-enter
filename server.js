const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const admins = require('./routes/api/admins');
const jokes = require('./routes/api/jokes');
const connectDB = require('./config/db');

require('./config/passport')(passport);

const app = express();
// connect Database
connectDB();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(passport.initialize());

// define Routes
app.use('/api', admins);
app.use('/api/jokes', jokes);

// server static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
