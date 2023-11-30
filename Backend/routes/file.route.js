const express = require("express");
const {FileModel} = require("../models/file.model.js");
const {ProjectModel} = require("../models/project.model.js");
const fileRoute = express.Router();

fileRoute.get("/get_files/:project_id", async (req, res)=>{
       const project_id = req.params.project_id; 
    try {
        const files = await FileModel.find({project_id});
        res.status(200).json({
            "message": "Successfully retrieved files",
            files
        });
    } catch (error) {
        res.status(404).json({
            "message": "Error while getting files",
             error
        });
    }
});

fileRoute.post("/create_file", async (req,res)=>{
    const payload = req.body;
    try {
        const new_file = new FileModel(payload);
        await new_file.save();
        await ProjectModel.findByIdAndUpdate({_id:payload.project_id},{last_edited: Date.now()});
        const files = await FileModel.find({project_id:payload.project_id});
        res.status(201).json({
            "message": "File created successfully",
            files
        });
    } catch (error) {
        res.status(400).json({
            "message": "Error while creating file",
            error
        });        
    }
});

fileRoute.patch("/change_description/:file_id/:project_id", async(req,res)=>{
    const {file_id,project_id} = req.params;
    const payload = req.body;
    try {
        await FileModel.findByIdAndUpdate({_id:file_id},payload); 
        await ProjectModel.findByIdAndUpdate({_id:project_id},{last_edited: Date.now()});
        const files = await FileModel.find({project_id});
        res.status(200).json({ 
            "message": "File updated successfully",
            files
        });
    } catch (error) {
        res.status(404).json({
            "message": "Error while modifying file description",
            error
        });        
    }
});

fileRoute.delete("/delete_file/:file_id/:project_id", async (req,res)=>{
    const {file_id,project_id} = req.params;
    try {
        await FileModel.findByIdAndDelete(file_id);
        await ProjectModel.findByIdAndUpdate({_id:project_id},{last_edited: Date.now()});
        const files = await FileModel.find({project_id});
        res.status(200).json({
            "message": "File deleted successfully",
            files
        });        
    } catch (error) {
        res.status(404).send({
            "message": "Error while deleting file",
             error
        });
    }
});

module.exports = {fileRoute};
