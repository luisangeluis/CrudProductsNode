//Dependencies
const express = require("express");
const initModels = require("./models/init.models");
const defaultData = require("./utils/defaultData");

const app = express();

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

module.exports = {
  app
}