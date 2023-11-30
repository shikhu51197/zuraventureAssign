const express = require("express");
const { UserModel } = require("../models/user.model.js");
const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  try {
    let allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({
      message: "error while fetching users",
      error,
    });
  }
});

userRoute.get("/:user_id", async (req, res) => {
  const ID = req.params.user_id;

  try {
    let current_user = await UserModel.findById(ID);
    res.status(200).json({
      "message" : "User loggedIn",
      current_user
    });
  } catch (error) {
    res.status(500).json({
      message: "error while fetching users",
      "error" : error.message,
    });
  }
});



userRoute.post("/create_user", async (req, res) => {
  const { user_email } = req.body;
  try {
    const user_check = await UserModel.find({ user_email });
    if (user_check.length === 0) {
      let current_user = await UserModel.create({ user_email });
      return res.status(201).json({
        message: "User Successfully Created",
        current_user,
      });
    } else {
      return res.status(200).json({
        message: "User Existed",
        current_user: user_check[0],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error while creating user",
      "error":error.message,
    });
  }
});

userRoute.patch("/change_user/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: ID }, payload);
    let current_user = await UserModel.findById(ID);
    res.status(200).send({
      message: "User Updated Successfully",
      current_user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while changing user name",
      error,
    });
  }
});

module.exports = { userRoute };
