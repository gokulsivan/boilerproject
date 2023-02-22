'use strict';

const student = require("./student");

module.exports = (sequelize, DataTypes) => {
        const course = sequelize.define('course', {
            courseslno:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true
            },
            courseid : {
                type : DataTypes.INTEGER,
                allowNull: false
            },
            courseName: {
                type : DataTypes.STRING,
                allowNull : false
            },
            id : {
                type: DataTypes.INTEGER,
                allowNull : false,
                // unique: true
                }
        });

        course.associate = function(mysqlModels){
            course.belongsTo(mysqlModels.student,{foreignKey: 'id', as : 'students'})
        }

        return course;
};
