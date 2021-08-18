const express = require("express");
const cors = require("cors");
const app = express();

// routes
const videosRoutes = require("./routes/videos");
const commentsRoutes = require("./routes/comments");

require("dotenv").config();
const port = process.env.PORT || 8080;

var path = require('path')

process.env.PWD = process.cwd();
app.use(express.static(path.join(process.env.PWD, 'public')));

//middleware
app.use(express.json());
app.use(cors());


app.use("/api", videosRoutes);
app.use("/api", commentsRoutes);


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});