const express = require('express');
const router = express.Router();

const knex = require('../../helper/db/Knex');

const trackTbl = 'tracks';

router.get('/', (req, res) => {
    knex(trackTbl)
    .select(`${trackTbl}.ID`, `${trackTbl}.Name`, `${trackTbl}.Description`, 
            `${trackTbl}.CreatedAt`, `${trackTbl}.UpdatedAt`, `${trackTbl}.IsPrivate`,
            `${trackTbl}.Competence`
    )
    .then(result => {
        if(result && result.length > 0) {
            res.status(200).json(result);
        }
        else res.status(200).json({ error: 'Entry not found' });
    })
    .catch(err => res.status(200).json({ error: err.sqlMessage }));
})

router.get('/:id', (req, res) => {
    knex(trackTbl)
    .select(`${trackTbl}.ID`, `${trackTbl}.Name`, `${trackTbl}.Description`, 
            `${trackTbl}.CreatedAt`, `${trackTbl}.UpdatedAt`, `${trackTbl}.IsPrivate`,
            `${trackTbl}.Competence`
    )
    .where(`${trackTbl}.ID`, req.params.id)
    .then(result => {
        if(result && result.length > 0) {
            res.status(200).json(result);
        }
        else res.status(200).json({ error: 'Entry not found' });
    })
    .catch(err => res.status(200).json({ error: err.sqlMessage }));
})

module.exports = router;