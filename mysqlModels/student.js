'use strict';
const course = require('./course');

module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('student', {
      stid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mentor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Probation',
        allowNull: false
      },

      photoUrl:{
        type: DataTypes.STRING,
        allowNull : true
      }
    });

    student.associate = function(mysqlModels){
      student.hasMany(mysqlModels.course,{foreignKey: 'id', as : 'course'})
    }

    return student;
  };