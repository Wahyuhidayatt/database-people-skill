const express = require('express');
const Skill = requaire('../models/user')

let skills = {}

  skills.add = (req, res) => {
    user.findOne({
      username: req.params.username
    }).then((data) => {
      let arrSkill = []
      data.skills.forEach((skill) => {
        arrSkill.push(skill.name)
      })

      if (arrSkill.indexOf(req.body.skill) >= 0) {
        res.send('skill is already in used')
      } else if (req.body.score > 10) {
        res.send('score max 10')
      } else if (req.body.score < 1) {
        res.send('score min 1')
      } else {
        user.findOneAndUpdate({
          username: req.params.username
        }, {
          $push: {
            skills: {
              name: req.body.skill,
              score: req.body.score
            }
          }
        }, {
          new: true
        }).then((result) => {
          res.json(result)
        }).catch((e) => {
          if (e) throw e
        })
      }
    })
  }

  skills.get = (req, res) => {
    user.find({
      username: req.params.username
    }).then((data) => {
      res.json(data[0].skills)
      console.log(data[0].skills)
    })
  }

  skills.delete = (req, res) => {
    user.findOne({
      username: req.params.username
    }).then((data) => {
      let arrSkill = []
      data.skills.forEach((skill) => {
        arrSkill.push(skill.name)
      })

      let index = arrSkill.indexOf(req.body.skill)
      if (index == -1) {
        res.send('skill is not found!')
      } else {
        user.findOneAndUpdate({
          username: req.params.username
        }, {
          $push: {
            skills: {
              name: req.body.skill
            }
          }
        }, {
          new: true
        }).then((data) => {
          res.send(data)
        })
      }
    })
  }

module.exports = skills
