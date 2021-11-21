require("dotenv").config()
const jwt = require("jsonwebtoken");
const registerModel = require("../models/registeredUsers.js");
const redis = require("redis");


const client = redis.createClient(process.env.REDIS_PORT)

const userRegistration = (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
    const newUser = new registerModel(userInfo);
    newUser.save().then(() => {
        res.status(200).send({
            error: { status: false, message: null },
            payload: userInfo
        });
    }).catch((err) => {
        res.status(401).send({
            error: { status: true, message: err.message },
            payload: userInfo
        });
    });
}
const userSignin = (req, res) => {
    console.log("fetching . .");
    const userInfo = req.body;
    var flag;
     registerModel.findOne({ username: userInfo.username },(err,data)=>{
        if(err){
            flag = false;
        }
        else{
            if(data){
                if(data.username = userInfo.username && data.password == userInfo.password){
                    flag = true;
               }else{
                flag = false;
               }
            }else{
                flag = false;
            }
        }
        if(flag){
            // generate token
            const user = {name : userInfo.username};
            const accessToken = jwt.sign(user,process.env.SECRET_ACCESS_TOKEN);
            //caching token
            client.setex("loginData",86400,JSON.stringify({data : userInfo , accessToken}));
            res.send({loggedin : true , payload : { data : userInfo ,accessToken}});
        }else{
            res.send({loggedin : false , payload : null});
        }
    })
}

const userLoginStatus = (req,res) =>{
    client.get("loginData",(err , dt)=>{
        if(err){
            console.log(err);
        }
        else{
            if(dt == null){
              res.send({loggedin:false , payload : null})
            }
            else{
              res.send({loggedin:true , payload : JSON.parse(dt)});
            }
        }
    })
}
module.exports = { userRegistration, userSignin ,userLoginStatus};