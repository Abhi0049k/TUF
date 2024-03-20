const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

prisma.$connect().then(() => {
    console.log("Connection with the Database established");
}).catch((err) => {
    console.log("Something went wrong with the database connection");
    console.log(err);
})

module.exports = prisma;