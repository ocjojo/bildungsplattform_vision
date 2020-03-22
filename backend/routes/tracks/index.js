const express = require('express');
const router = express.Router();

const knex = require('../../helper/db/Knex');

const trackTbl = 'tracks';
const trackUserTbl = 'user_to_track';
const trackLearningTbl = "learning_unit_to_track";
const unitTbl = "learning_units";
const mediaTbl = "learning_unit_to_media";


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
});

router.get('/:id(\\d+)/', (req, res) => {
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
});

router.get('/my', (req, res) => {
    if(req.user && req.user.ID) {
        knex(trackUserTbl)
        .select(`${trackTbl}.ID`, `${trackTbl}.Name`, `${trackTbl}.Description`, 
                `${trackTbl}.CreatedAt`, `${trackTbl}.IsPrivate`, `${trackUserTbl}.IsAdmin`,
                `${trackUserTbl}.IsManager`, `${trackUserTbl}.Progress`
        )
        .leftJoin(trackTbl, `${trackTbl}.ID`, `${trackUserTbl}.TrackID`)
        .where(`${trackUserTbl}.UserID`, req.user.ID)
        .then(result => {
            if(result && result.length > 0) {
                res.status(200).json(result);
            }
            else res.status(200).json({ error: 'Entry not found' });
        })
        .catch(err => res.status(200).json({ error: err.sqlMessage }));
    }
});

router.get('/:id(\\d+)/units', (req, res) => {
    knex(trackTbl)
        .select(`${trackTbl}.ID`, `${unitTbl}.ID`, `${unitTbl}.Title`, `${unitTbl}.Description`,
            `${unitTbl}.CreatedAt`, `${unitTbl}.UpdatedAt`, `${mediaTbl}.Target`,
            `${mediaTbl}.Length`, `${mediaTbl}.Category`
        )
        .leftJoin(trackLearningTbl, `${trackTbl}.ID`, `${trackLearningTbl}.TrackID`)
        .leftJoin(unitTbl, `${trackLearningTbl}.UnitID`, `${unitTbl}.ID`)
        .leftJoin(mediaTbl, `${unitTbl}.ID`, `${mediaTbl}.UnitID`)
        .where(`${trackTbl}.ID`, req.params.id)
        .then(result => {
            if(result && result.length){
                res.status(200).json(result);
            }
            else{
                res.status(200).json({error: "No Units found"});
            }
        })
        .catch(err => res.status(200).json({error: err.sqlMessage}));
});

module.exports = router;
