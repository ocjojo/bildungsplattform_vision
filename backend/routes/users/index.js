const express = require("express");
const router = express.Router();

const Knex = require('../../helper/db/Knex');

router.get('/', (req, res) => {
    console.log("User test...");
    res.status(200).send("Ok!");
});

router.post('/register', (req, res) => {
    Knex('users').insert({ Username: 'fabian' }).then( result => console.log(result)).catch(sqlerr => console.log("Error: ", sqlerr));
    res.status(200).json({});
});

module.exports = router;