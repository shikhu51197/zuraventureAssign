const express = require("express");
const {connection} = require("./config/connection.js");
const {userRoute} = require("./routes/user.route.js");
const {projectRoute} = require("./routes/project.route.js");
const {fileRoute} = require("./routes/file.route.js");
const cors = require("cors");
const { chatRoute } = require("./routes/chat.route.js");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/",userRoute);
app.use("/project",projectRoute);
app.use("/file",fileRoute);
app.use("/chatbot",chatRoute);

app.listen(8080, async (req,res)=>{
    try {
        await connection;
        console.log("database connected and server is running");
    } catch (error) {
        console.log("error in running backend", error);
    }
});