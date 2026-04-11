const express = require("express");
const connectDB = require("./config/db");
const PORT = 3000;

const app = express();

connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});