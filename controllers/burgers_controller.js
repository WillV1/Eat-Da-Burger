var express = require("express");
let burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var displayBurger = {
            burgers: data
        };
        console.log(displayBurger);
        res.render("index", displayBurger);
    });
});

router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", [req.body.burger_name], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;