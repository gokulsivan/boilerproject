'use strict';

const express = require('express');
const router = express.Router();

const nodemailer =require('nodemailer');
module.exports = { 
    sendMail : async(req,res) =>{
        let mailTransporter = nodemailer.createTransport({ 
        service : "hotmail",
        auth: {
            user: "demo_24id@hotmail.com",
            pass : "Testtest1234"
        }
    })

    let details = {
            from : "demo_24id@hotmail.com",
            to : "gokulsivan24@gmail.com",
            subject : "Test mail for nodemailer",
            text: "This is a test mail for sending mail by nodemailer"

        }
    mailTransporter.sendMail(details,(err) => {
        if(err){
            console.log(err);
        }else{
            console.log("mail has been send");
        }
    })
}}
