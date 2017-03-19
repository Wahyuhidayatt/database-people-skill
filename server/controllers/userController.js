const express = require('express');
const User = require('../models/user');

let users = {}

  users.getAlluser = (req, res, next) => {
    User.find({}).then((users) => {
      if(!users){
        req.send('user not found')
      }else{
        res.send(users)
    }).catch((e) => {
      if (e) throw e
    })
  }

  users.create = (req, res, next) => {
    User.findOne({
      username: req.body.username
    }).then((username) => {
      if (username) {
        res.send('Username is already used')
      } else {
        User.create({
          username: req.body.username,
          skills: []
        }).then((data) => {
          res.send(data)
        }).catch((err) => {
          if (e) throw e
        })
      }
    })
  }

  users.update = (req, res) => {
    user.findOne({
      username: req.params.username
    }).then((data) => {
      if (!data) {
        res.send('user is not found!')
      } else {
        data.update(req.body).then((user) => {
          res.send(user)
        }).catch((e) => {
          if (e) throw e
        })
      }
    })
  }

  users.delete =  (req, res) => {
    user.findOne({
      username: req.params.username
    }).then((data) => {
      if (!data) {
        res.send('user is not found!')
      } else {
        data.remove(req.params.username).then((result) => {
          res.send(`username ${result.username} has been deleted`)
        }).catch((e) => {
          if (e) throw e
        })
      }
    })
  }

  users.getOne = (req, res) => {
    user.findOne({
      username: req.params.username
    }).then((data) => {
      if (!data) {
        res.send('user is not found!')
      } else {
        res.send(data)
      }
    }).catch((e) => {
      if (e) throw e
    })
  }


module.exports = users
