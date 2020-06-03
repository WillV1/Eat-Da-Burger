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

  router.post("/api/burger", function(req, res) {
    burger.insertOne("burger_name", [req.body.burger_name], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
module.exports = router;