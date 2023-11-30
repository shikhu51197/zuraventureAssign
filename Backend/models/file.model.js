const mongoose = require("mongoose");

const FileSchema = mongoose.Schema({
    file_name : {type:String, required:true},
    file_description : {type:String, required:true, minLength:["20","Description must be atleast 20 characters"]},
    project_id : {type:String, required:true},
    created_at : {type:Date, default:Date.now()}
},{
    versionKey : false
});

const FileModel = mongoose.model("file",FileSchema);

module.exports = {FileModel};