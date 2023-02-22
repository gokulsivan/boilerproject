'use strict';

const mysqlModels = require('../../mysqlModels');
const student = require('../../mysqlModels/student');
const course = require('../../mysqlModels/course');

module.exports = {
    addCourse : async(data) => {
        try { 
            console.log(data);
            const courseData = await mysqlModels.course.create(data);
            return courseData;
        }catch(e){
            console.log("db error" + e);
        }
    },

    getCourseDetails : async () => {   
    try { 
        const courseData = await mysqlModels.course.findAll();
        return courseData;
    }catch(err){
        console.log("db error" + err)
    } 
    },

    getCourseWithStudents: async (data) => {
        try {
            const courseData = await mysqlModels.course.findAll({
                where : {
                    id : data.id 
                },
                include : [{ model : mysqlModels.student , as : "students" }]});
                return courseData;
            }catch(err){
                console.log(err);
            }
    },
}