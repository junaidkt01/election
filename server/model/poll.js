const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PointSchema = Schema({
  leadername: { type: String, required: true },
  voter: { type: String, required: true },
});
const Poll = mongoose.model("poll", PointSchema);
module.exports = Poll;
