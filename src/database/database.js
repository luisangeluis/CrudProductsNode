const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.DB_PORT
})

exports.db = db;
