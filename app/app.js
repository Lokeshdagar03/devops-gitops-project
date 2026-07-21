const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("🚀 GitOps Demo - Version 2");
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});
