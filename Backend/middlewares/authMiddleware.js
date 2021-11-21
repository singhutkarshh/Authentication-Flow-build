require("dotenv").config()
const jwt = require("jsonwebtoken");
const redis = require("redis");


const client = redis.createClient(process.env.REDIS_PORT)

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

const checkLoginStatus = (req,res,next) =>{
  client.get("loginData" , (err , dt)=>{
    if(err){
      console.log(err);
    }else{
      if(dt == null){
        next();
      }else{
        res.send({loggedin : true , payload : JSON.parse(dt)});
      }
    }
  })
}

module.exports = {authenticateToken , checkLoginStatus};