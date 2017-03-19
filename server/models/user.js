'use strict'
const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaUser = Schema({
  username: {
      type: String,
      require: true,
      unique: true
    },
    skills: [{
      name: {
        type: String,
        require: true,
        unique: true
      },
      score: Number
    }]
  },{
  timestamps : true
})
// schemaUser.pre('save', function(next) {
//   password = passwordHash.generate(`${password}`);
//   next();
// });
let users = Mongoose.model('users', schemaUser)

module.exports = users
