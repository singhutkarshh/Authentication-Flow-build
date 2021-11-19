require("dotenv").config()
const jwt = require("jsonwebtoken");


const authenticateToken  = (req,res,next) =>{
    // token format => bearer token
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader && authHeader.split(" ")[1];
  if (accessToken == null) return res.status(401).send({error : { status : true , message : "Token not created!"}});
  jwt.verify(accessToken , process.env.SECRET_ACCESS_TOKEN,(err,data)=>{
    if (err) return res.status(402).send({error : { status : true , message : err}});
    req.user = data;
    next();
  })
};

module.exports = {authenticateToken};