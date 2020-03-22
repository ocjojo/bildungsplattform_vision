const express = require('express');
const router = express.Router();

const knex = require('../../helper/db/Knex');

const unitTbl = 'learning_units';
const mediaTbl = 'learning_unit_to_media';

/*router.get('/', (req, res) => {
    knex(unitTbl)
    .select(`${unitTbl}.ID`, `${unitTbl}.Title`, `${unitTbl}.Description`, 
            `${unitTbl}.CreatedAt`, `${unitTbl}.UpdatedAt`, `${mediaTbl}.Target`,
            `${mediaTbl}.Length`, `${mediaTbl}.Category`
    )
    .leftJoin(mediaTbl, `${unitTbl}.ID`, `${mediaTbl}.UnitID`)
    .then(result => {
        if(result && result.length > 0) {
            let returnArray = [];
            let lastID = -1;
            result.map(row => {
                if(row.ID !== lastID) {
                    const objToAdd = {
                        ID: row.ID,
                        Title: row.Title,
                        Description: row.Description,
                        CreatedAt: row.CreatedAt,
                        UpdatedAt: row.UpdatedAt,
                        Media: row.Target ? result.filter(r => r.ID === row.ID).map(row => { return {Link: row.Target, MediaType: row.Category, Length: row.Length}}) : []
                    }
                    returnArray = [...returnArray, objToAdd];
                    lastID = row.ID;
                }
            })
            res.status(200).json(returnArray);
        }
        else res.status(200).json({ error: 'Entry not found' });
    })
    .catch(err => res.status(200).json({ error: err.sqlMessage }));
})

router.get('/:id', (req, res) => {
    knex(unitTbl)
    .select(`${unitTbl}.ID`, `${unitTbl}.Title`, `${unitTbl}.Description`, 
            `${unitTbl}.CreatedAt`, `${unitTbl}.UpdatedAt`, `${mediaTbl}.Target`,
            `${mediaTbl}.Length`, `${mediaTbl}.Category`
    )
    .leftJoin(mediaTbl, `${unitTbl}.ID`, `${mediaTbl}.UnitID`)
    .where(`${unitTbl}.ID`, req.params.id)
    .then(result => {
        if(result && result.length > 0) {
            const objToSend = {
                ID: result[0].ID,
                Title: result[0].Title,
                Description: result[0].Description,
                CreatedAt: result[0].CreatedAt,
                UpdatedAt: result[0].UpdatedAt,
                Media: result[0].Target ? result.map(row => { return {Link: row.Target, MediaType: row.Category, Length: row.Length}}) : []
            }
            res.status(200).json(objToSend);
        }
        else res.status(200).json({ error: 'Entry not found' });
    })
    .catch(err => res.status(200).json({ error: err.sqlMessage }));
})*/

module.exports = router;