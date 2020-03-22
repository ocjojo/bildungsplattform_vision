const express = require("express");
const app = express();

const apiRoute = require("./routes/index");


app.use('/api', apiRoute);



app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
