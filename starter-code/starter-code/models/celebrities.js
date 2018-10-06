const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const CelebritiesSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

module.exports = mongoose.model("Celebrities", CelebritiesSchema);