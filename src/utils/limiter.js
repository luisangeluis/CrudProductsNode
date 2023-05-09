const rateLimit = require('express-rate-limit');

const apiLimiter =rateLimit({
  windowMs:1*60*1000,
  max:20,
  standardHeaders:true,
  legacyHeaders:false
})

module.exports=apiLimiter;