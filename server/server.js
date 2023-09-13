// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const api = require('./routes/api');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
  
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/img-board', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((() => console.log("Connected to DB")))
  .catch(console.error);

app.use('/api', api)
// app.use('/users', users)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//to redirect for server port
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build")

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(buildPath))
}

app.get("*", function(req, res){
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if(err) {
        res.status(500).send(err)
      }
    }
  )
})
// // start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});