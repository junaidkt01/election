const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    registerId: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
  },
  // { collation: "user-data" }
);

const User = mongoose.model("UserData", UserSchema);

module.exports = User;
