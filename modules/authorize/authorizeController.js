'use strict';


const jwt = require('jsonwebtoken');
const mysqlModels = require('../../mysqlModels');
const userdb = require("../../mysqlModels/userjwt")

module.exports = {
    generateToken : async(req,res) => {
        try { 
            const email = req.body.email;
            const password = req.body.password;
            const user = { email : email, password : password};
            const accessToken = await jwt.sign( user , process.env.JWT_SECRET_KEY)
            res.json({ accesstoken : accessToken});
            return accesstoken;
        }catch(err){
            res.send(err);
        }
    },
    verifyToken : async(req,res) => {
        try { 
            const token = req.headers.authorization.split(' ')[1];
            // const token = req.body.token;
             console.log(token);
            const user =  await jwt.verify(token , process.env.JWT_SECRET_KEY);
            const existingUser = await userdb.findOne(user.email)
            if(existingUser != user){
                res.status(404).json({
                    success: false,
                    message: "User session expired"
                  });
                  return;
            }
        }catch(err){
            res.send(err);
        }
    },
    authenticationfn : async(req,res) => {
        try {
            let username = req.body.name;
            existingUser = await student.findone(username);
            if (!existingUser){
                res.send("Incorrect details entered.")
            }
            }catch(err){
                res.send(err);
            }

    } 
}