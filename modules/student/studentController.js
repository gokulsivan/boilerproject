'use strict';

const student = require('../../mysqlModels/student');
const studentService = require('./studentService');

module.exports = {


    getStudents:  async (req,res) => {
        try {
            const studentData = await studentService.getStudentsFromPostgres();
            res.json(studentData);
        }catch(err){
            res.send('Error' + err);
        }   
    },

    getstudentbyid : async(req,res) => {
        try {
            const studentData = await studentService.getStudentsById(req.body);
            res.json(studentData);
        }catch(err){
            res.send("error" + err);
        }
    },


    addStudents: async (req,res) => {
        try{
            console.log(req.body)
            const studentData = await studentService.addStudentData(req.body);
            res.json(studentData);
        }catch(err){
            return errorResponse(req, res, err);
        }
    },

    deleteStudents: async(req,res) => {
        try{
            const deleteData = await studentService.deleteStudentData(req.body);
            res.send("success");
        }catch(err){
            res.send(err)
        }
    },

    getStudentPhoto : async(req,res) => {
        try{ 
            const photourl = await studentService.studentPhoto(req.body);
            console.log(photourl)
            res.send(photourl);
        }catch(err){
            res.send(err)
        }    
    }

    
    

}




