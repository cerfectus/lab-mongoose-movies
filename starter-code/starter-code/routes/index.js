const express = require('express');
const router  = express.Router();
const Celebrities = require ("../models/celebrities")
const celebritiesForm = require ("../views/partials/celebrityForm.hbs")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/Celebrities", (req, res ) => {
  Celebrities.find()
  .then(celebrities => {
    res.render("celebrities", {header: "lista de celebridades", body: "celebrities"});
  })
});

router.post("/Celebrities", (req, res) => {
  Celebrities.create(req.body)
  .then(() => {
    res.render("celebrities", {header: "lista de celebridades", celebrities});
    res.redirect("/celebrities")
  })
});



module.exports = router;
