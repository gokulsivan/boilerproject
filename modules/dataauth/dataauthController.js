'use strict';

const datajwt = require('../../mysqlModels/userjwt');
const authService = require("./dataauthService");
//  signUp , authenticateUser , showUser 

exports.authenticateUser = async(req,res) =>  {
    let { email , password } = req.body;
    try { 
        let existingUser = await datajwt.findOne({email : email});
        if (!existingUser || existingUser.password != password ) {
            res.status(404).json({
                success: false,
                message: "The userId provided is invalid!"
              });
              return;
        }
        next();
    }catch(err){
            res.send(err);
    }
}

exports.signUp = async(req,res) => {
    let newUser = req.body;
    if ( neweUser == null){
        res.status(404).json({
            success: false,
            message: "Enter right credentials!"
          });
          return;
    }
    try {
        let addUser =  await dataauthService.addSUserData(newUser);
        res.json(studentData);
    }catch(err){
            return errorResponse(req, res, err);
    }
    next();
}
