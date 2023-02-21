const mongoose = require("mongoose");
const express = require("express");
const app = express();
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    default: 0,
  },
  SrNo: {
    type: String,
    default: 0,
  },
  fname: {
    type: String,
    default: 0,
  },
  lname: {
    type: String,
    default: 0,
  },
  email: {
    type: String,
    default: 0,
  },
  contact: {
    type: String,
    default: 0,
  },
});

const User = mongoose.model("product", UserSchema);

module.exports = User;
