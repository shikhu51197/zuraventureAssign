const express = require("express");
const { ProjectModel } = require("../models/project.model.js");
const projectRoute = express.Router();

// these all are private routes, if user logged in then only user can do that ServiceWorkerRegistration, In future when we create signup and login page, we send token and with help of token we create middleware.
projectRoute.get("/getall", async (req, res) => {
  console.log("user");
  const user_id = req.headers.authorization;
  try {
    const projects = await ProjectModel.find({ user_id });
    res.status(200).json({
        message: "successfully get all projects", 
        projects 
    });
  } catch (error) {
    res.status(404).json({ 
        message: "error in getting projects", 
        error})
  }
});

projectRoute.post("/create_project", async (req, res) => {
  const {project_name} = req.body;  
  const user_id = req.headers.authorization;
  try {
    const new_project = new ProjectModel({project_name, user_id});
    await new_project.save();
    const projects = await ProjectModel.find({ user_id });
    res.status(201).json({ "message": "Project create successfully", projects});
  } catch (error) {
    res.status(500).json({
        "message": "error in creating project", 
        error
    })
  }
});

module.exports = { projectRoute };
