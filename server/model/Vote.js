const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const PointSchema = Schema({
  leadername: { type: String, required: true },
  point: { type: Number, required: true },
  votedby: { type: ObjectId, ref: "User" },
});
const Point = mongoose.model("Point", PointSchema);
module.exports = Point;
