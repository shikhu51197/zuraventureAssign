const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema(
  {
    chatbotName: String ,
    welcomeMessage: String ,
    inputPlaceholder: String ,
    primaryColor:  { type: String, default : "green" },
    fontColor:  { type: String, default : "black" },
    fontSize:  { type: Number, default : 25 },
    chatHeight:  { type: Number, default : 30 },
    showSources:  { type: Boolean, default : true },
    chatIconSize:  { type: String, default : "small" },
    positionOnScreen:  { type: String, default : "top" },
    distanceFromBottom:  { type: Number, default : 20 },
    horizontalDistance:  { type: Number, default : 20 },
    botIcon: String ,
    user_id : {type: String, required : true, unique : true}
  },
  {
    versionKey: false,
  }
);

const ChatModel = mongoose.model("chatbot", ChatSchema);

module.exports = { ChatModel };
