//Dependencies
const express = require("express");

const app = express();

//Routes
const productsRouter = require("./routes/products.routes").router;

app.use("/api/v1/products",productsRouter);

app.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = {
  app
}