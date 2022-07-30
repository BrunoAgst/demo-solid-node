const { Sequelize } = require('sequelize');

class SQLAdapter {

    constructor(database, user, password) {
        this.connection = new Sequelize(process.env.DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
            host: process.env.HOST_DATABASE,
            dialect: 'mysql'
        });
    }

    query(queryString){
        return this.connection.query(queryString);
    }

}

module.exports = SQLAdapter