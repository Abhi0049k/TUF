const express = require("express");
const prisma = require("./configs/prismaInstance");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/fetching-table-content", async (req, res) => {
    try {
        const list = await prisma.form.findMany();
        console.log(list);
        res.status(200).send(list);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong" });
    }
})

app.post("/add-form", async (req, res) => {
    const { username, code, lang, stdin } = req.body;
    if (!username || !code || !lang || !stdin) return res.status(404).send({ message: "Missing Fields in received Data" });
    try {
        const newForm = await prisma.form.create({ data: { username, code, lang, stdin } });
        console.log(newForm);
        res.status(200).send({ message: "Data received" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong!!!" });
    }
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on Port: ${process.env.PORT}`)
})