'use strict';

const courseService = require('./courseService');

module.exports = {
    getCourseDetails : async(req,res) => {
        try {
            const coursedata = await courseService.getCourseDetails();
            res.json(coursedata);
        }catch(err){
            res.send("error" + err);
        }
    },

    addCourseDetails : async(req,res) => {
        try { 
            // console.log(req.body)
            const courseData = await courseService.addCourse(req.body);
            res.json(courseData);
        }catch(err){
            res.send("error" + err);
        }
    },


    getCourseStudent : async(req,res) => {
        try { 
            const coursedata = await courseService.getCourseWithStudents(req.body);
            res.json(coursedata);
        }catch(err){
            res.send("error" + err);
        }
    },
}