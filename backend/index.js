const express = require("express");
const cors = require("cors");
const { fetchingTableContent, addForm } = require("./controllers/form.controllers");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/fetching-table-content", fetchingTableContent)

app.post("/add-form", addForm)

app.listen(process.env.PORT, () => {
    console.log(`App is running on Port: ${process.env.PORT}`)
})