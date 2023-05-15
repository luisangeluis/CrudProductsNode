//Dependencies
const express = require("express");
const initModels = require("./models/init.models");
const defaultData = require("./utils/defaultData");
const cors = require('cors');
const apiLimiter = require('./utils/limiter');

const app = express();
app.use(express.json());
app.use(cors());
app.use(apiLimiter);

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
    .then(() => {
      console.log('database synced');
      defaultData();
    })
    .catch(error => console.log(error))
}

//Routes
const productsRouter = require("./routes/products.routes").router;
const productCateriesRouter = require("./routes/productCategories").router;

app.use("/api/v1/products", productsRouter);
app.use("/api/v1/productCategories", productCateriesRouter);

app.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = {
  app
}