const Knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "db",
        port: 3306,
        user: process.env.MYSQL_ROOT_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
  });

module.exports = Knex;