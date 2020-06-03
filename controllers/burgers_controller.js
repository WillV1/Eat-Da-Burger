var express = require("express");
let burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var displayBurger = {
        burgers: data
      };
      console.log(displayBurger);
      res.render("index", displayBurger);
    });
  });

module.exports = router;