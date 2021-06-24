const express = require("express");
const cors = require("cors");
const app = express();

// routes
const videosRoutes = require("./routes/videos");
const commentsRoutes = require("./routes/comments");

require("dotenv").config();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(express.static("public"))
app.use(cors());


app.use("/api", videosRoutes);
app.use("/api", commentsRoutes);


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});