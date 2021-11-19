const express = require("express");
const { userRegistration, userSignin } = require("../controller/authController.js");
const { authenticateToken } = require("../middlewares/authMiddleware.js");
const authRoutes = express.Router();

const posts = [
    {username : "imutkarshh", title : "One" , book : "noothing"},
    {username : "son", title : "tow" , book : "something"},
    {username : "moon", title : "three" , book : "everythinng"},
    ];

authRoutes.post("/users/register", userRegistration);
authRoutes.post("/users/signin", userSignin);
authRoutes.get("/users/posts", authenticateToken , (req,res)=>{
    res.json(posts.filter((post)=>  post.username == req.user.name));
});

module.exports = authRoutes;