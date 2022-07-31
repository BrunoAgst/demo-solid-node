const { Sequelize } = require('sequelize');

class SQLAdapter {

    constructor(database, user, password) {
        this.connection = new Sequelize(process.env.DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
            host: process.env.HOST_DATABASE,
            dialect: 'mysql'
        });
    }

    query(queryString){
        try {
            return this.connection.query(queryString);
            
        } catch (error) {
            return error.message
        }
    }

}

module.exports = SQLAdapter