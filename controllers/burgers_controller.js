var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req,res){
    
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    
  });
});


router.post("/burgers/create", function (req ,res){

  console.log(req.body.burger_name)

    burger.create("burger_name", req.body.burger_name, function(result) {
        
        res.redirect("/");
      });


})

router.post("/api/burgers/:id", function (req , res){

    var condition = "id = " + req.params.id;

    console.log("condition", condition);


    burger.update(
        {
          devoured : 1
        },
        condition,
        function(result) {
          
          res.redirect("/")
          
    
        }
      );


})



module.exports = router;