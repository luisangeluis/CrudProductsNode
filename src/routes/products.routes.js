//Dependencies
const router = require("express").Router();
//Services


router.route("/")
    .get((req,res)=>res.send("hello world"));

exports.router = router;