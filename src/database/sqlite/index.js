const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path")
async function sqliteConection() {
    const dataBase = await sqlite.open({
        
        filename: path.resolve(__dirname, "..", "dataBase.db"),
        driver: sqlite3.dataBase
    });
    return dataBase;
}

module.exports = sqliteConection;