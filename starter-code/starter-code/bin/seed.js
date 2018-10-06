const mongoose = require ("mongoose")
const Celebrities = require("../models/celebrities");

mongoose.connect("mongodb://localhost:27017/library",{useNewUrlParser: true});

const celebrities = [
  {
    name:"Will Smith",
    occupation: "Actor",
    catchPhrase: "I am hancock",

  },
  {
    name:"messi",
    occupation: "God",
    catchPhrase: "yo soy Lio",
  },
  {
    name:"Dua Lipa",
    occupation:"Singer",
    catchPhrase:"IDGAF",
  }
];
Celebrities.create(celebrities, err => {
  if (err) throw err;
  console.log("creado con amorts");
  mongoose.connection.close();
})