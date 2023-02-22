'use strict';

const mysqlModels = require('../../mysqlModels');
const student = require('../../mysqlModels/student');

module.exports = {

    getStudentsFromPostgres : async () => {
        try { 
        return mysqlModels.student.findAll();
    }catch(err){
        console.log("db error" + err);
    }
    },


    getStudentsById : async (data) => {
        try { 
            const studentData = mysqlModels.student.findAll({
                where : {
                    id : data.id
                }            
            })
            return studentData;
        }catch(err){
            console.log("db error" + err);
        }

    },

    addStudentData : async (data) =>{
        try {
        console.log(data);    
        let stdata = await mysqlModels.student.create(data);
        return stdata;
        } catch(e) {
            console.log("db error" + e);
        }
    },
        
    deleteStudentData : async (data) => {
        try { 
        console.log(data);
        let deletedata =  mysqlModels.student.destroy({
            where:{
                id: data.id
            }});
        return deletedata;
        }catch(err){
            console.log(err);
        }
    },

    studentPhoto : async (data) =>{
        try {
            const studentPhotoData = mysqlModels.student.findAll({
                where : {
                    id : data.id
                }            
            })

            return studentPhotoData;
        }catch(err){
            console.log(err);
        }
    },
        
} 