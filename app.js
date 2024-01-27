// import the express module
const express = require("express");

// import the path module
const path = require("path");

// create the express application
const app = express();

// build route handlers
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"))
})

// create the port to listen for the application
const PORT = process.env.PORT || 5000;

// listen for the express application
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));