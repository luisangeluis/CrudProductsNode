//Dependencies
const express = require("express");
const initModels = require("./models/init.models");
const defaultData = require("./utils/defaultData");
const cors = require('cors');
// const fileUpload = require('express-fileupload');
const uploadImages = require("./utils/fileUpload");

//Init configurations
const app = express();
app.use(express.json());
app.use(cors());
// app.use(uploadImages);

//Database
const { db } = require("./database/database");
initModels();

db.authenticate()
  .then(res => console.log("db authenticate"))
  .catch(error => console.log(error));

if (process.env.NODE_ENV === 'production') {
  db.sync()
    .then(() => {
      console.log('database synced');
      defaultData();
    })
    .catch(error => console.log(error))
} else {
  db.sync({ force: true })
    // db.sync()
    .then(() => {
      console.log('database synced');
      defaultData();
    })
    .catch(error => console.log(error))
}

//Routes
const productsRouter = require("./routes/products.routes").router;

app.use("/api/v1/products", productsRouter);

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post("/upload-images", (req, res) => {
  console.log(req.files);
  res.send('hello images')
})

module.exports = {
  app
}