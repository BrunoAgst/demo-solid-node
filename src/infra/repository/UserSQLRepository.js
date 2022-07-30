const SQLAdapter = require('../database/SQLAdapter.js');

class UserSQLRepository {
    constructor() {
        this.db = new SQLAdapter();
    }

    async save({ name, password, email, phone }){
        await this.db.query(`INSERT INTO login (name, email, phone, pass) VALUES ("${name}", "${email}", "${phone}", "${password}")`);
        return
    }

    async getAll(){
        const users = await this.db.query(`SELECT * FROM ${process.env.TABLE_NAME}`);
        return users[0];
    }

    async get(email){
        const user = await this.db.query(`SELECT * FROM login WHERE email LIKE '%${email}%'`);
        return user[0];
    }
}

module.exports = UserSQLRepository;