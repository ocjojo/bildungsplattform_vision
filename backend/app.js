const express = require("express");
const app = express();

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwt_secret = "jwt_secret";

const apiRoute = require("./routes/index");

const port = process.env.port || 3000;


app.use(cookieParser());

app.use( (req, res, next) => {
  if(req.cookies && req.cookies.token) {
    jwt.verify(req.cookies.token, jwt_secret, (err, data) => {
        if(!err) {
            req.user = data;
            next();
        }
        else {
            req.user = {}
            next();
        }
    })
  }
  else {
    req.user = {};
    next();
  }
});


app.use('/api', apiRoute);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
