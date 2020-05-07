const {
    authSyncDatabase
} = require('./utils/database.utils');

process.env.databaseAccount = JSON.stringify({
    username: "root",
    password: "P@ssw0rd@#1",
    options: {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
    }
});

console.log("process.env.databaseAccount: " , process.env.databaseAccount);

const fruitBasketMaster = require('./databases/fruitBasketMaster');

authSyncDatabase(fruitBasketMaster, {
    force: true,
    logging: true,
}).then(() => {
    console.info("Database syncronized successfully.")
}).catch((error) => {
    console.error("Failed to syncronize db: ", error);
}).then(() => {
    console.info("Testing done.");
})