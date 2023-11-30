const mongoose = require("mongoose");
require("dotenv").config()

const connection = mongoose.connect("mongodb+srv://shikha:meghasing@cluster0.tsfyez7.mongodb.net/zuraventure?retryWrites=true");

module.exports = {connection};
