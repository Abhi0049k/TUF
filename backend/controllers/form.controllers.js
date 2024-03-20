const prisma = require("../configs/prismaInstance");
const { redisClient } = require("../configs/redis");

const fetchingTableContent = async (req, res) => {
    try {
        const cachedList = await redisClient.get('list');
        if (cachedList)
            return res.status(200).send(cachedList);
        const list = await prisma.form.findMany();
        await redisClient.set("list", JSON.stringify(list), 'EX', 60 * 60 * 24);
        return res.status(200).send(list);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Something went wrong" });
    }
}

const addForm = async (req, res) => {
    const { username, code, lang, stdin } = req.body;
    if (!username || !code || !lang || !stdin) return res.status(404).send({ message: "Missing Fields in received Data" });
    try {
        await prisma.form.create({ data: { username, code, lang, stdin } });
        const list = await prisma.form.findMany();
        await redisClient.set("list", JSON.stringify(list), 'EX', 60 * 60 * 24);
        res.status(200).send({ message: "Data received" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong!!!" });
    }
}

module.exports = { fetchingTableContent, addForm }