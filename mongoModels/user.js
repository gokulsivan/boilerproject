'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../config');

const userSchema = new Schema({
  fullName: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: Number,
    enum: Object.values(config.DB_CONSTANTS.USERS.ROLE)
  },
  status: {
    type: Number,
    enum: Object.values(config.DB_CONSTANTS.USERS.STATUS)
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;
