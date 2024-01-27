// import the express module
const express = require("express");

// create the express application
const app = express();

// create the port to listen for the application
const PORT = process.env.PORT || 5000;

// listen for the express application
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));