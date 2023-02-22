'use strict';

const express = require('express');
const router = express.Router();

const db = require("../mysqlModels");
//get all users
const{
    getStudents, addStudents, deleteStudents, getstudentbyid, getStudentPhoto
} = require('../modules/student/studentController');
router.get("/all", getStudents);
router.get("/id", getstudentbyid);
router.post("/add", addStudents);
router.delete("/delete", deleteStudents);
router.get("/photo", getStudentPhoto);
// router.post("/new", (req,res)=> {
//     db.student.create({
//       stid: req.body.stid,
//       fullname: req.body.fullname,
//       email: req.body.email,
//       departmnet: req.body.departmnet,
//       mentor: req.body.req.body.mentor,
//       status: req.body.status
//     }).then(submitedstudent => res.send(submitedstudent))
// })


module.exports = router;