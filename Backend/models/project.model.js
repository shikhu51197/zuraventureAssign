const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    project_name: { type: String, required: true },
    last_edited: { type: Date, default: Date.now() },
    user_id: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ProjectModel = mongoose.model("project", ProjectSchema);

module.exports = { ProjectModel };
