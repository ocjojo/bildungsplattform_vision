const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwt_secret = "jwt_secret";

const knex = require('../../helper/db/Knex');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



router.post('/register', (req, res) => {
    let { username, mail, password, fullname, groupid } = req.body;
    if(!groupid || groupid < 1 || groupid > 3) {
        res.status(200).json({ error: 'Invalid groupid' });
    }
    if (!username || !password || !mail || !fullname || username.trim().length === 0 
        || password.trim().length === 0 || mail.trim().length === 0 ||  fullname.trim().length === 0) {
        res.status(200).json({ error: 'Please fill out all fields' });
    }
    else {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                res.status(200).json({ error: err });
            }
            else {
                knex('users').insert({ Username: username.trim(), Email: mail ? mail.trim() : '', Password: hash, Fullname: fullname || '' }).then((result) => {
                    const userID = result[0];
                    knex('user_to_usergroup').insert({ UserID: userID, GroupID: groupid}).then(result => {
                        res.status(200).json({ success: 'User registered' });
                    })
                    .catch(err => res.status(200).json({ error: err.sqlMessage }));
                })
                .catch(err => res.status(200).json({ error: err.sqlMessage }));
            }
        });
    }
});

router.post('/login', (req, res) => {

    let { username, password } = req.body;
    knex('users').select('users.ID', 'users.Username', 'users.Fullname', 'users.Email', 'users.Password', 'user_to_usergroup.GroupID').where('Username', username).orWhere('Email', username).leftJoin('user_to_usergroup', 'users.ID', 'user_to_usergroup.UserID').then(result => {
        if (result && result.length > 0) {
            const user = result[0];
            bcrypt.compare(password, user.Password, (err, result) => {
                if (result) {
                    const userToSign = {
                        ID: user.ID,
                        Username: user.Username,
                        Fullname: user.Fullname,
                        Email: user.Email,
                        GroupID: user.GroupID
                    }
                    const userToSend = {
                        ID: user.ID,
                        Username: user.Username,
                        Fullname: user.Fullname,
                        GroupID: user.GroupID
                    }
                    jwt.sign(userToSign, jwt_secret, (err, token) => {
                        res.cookie('token', token, {
                            secure: false, 
                            httpOnly: true
                            //sameSite: 'None'
                          }).json(userToSend);
                    })
                }
                else res.status(200).json({ error: 'User not found or wrong password' });
            });
        }
        else res.status(200).json({ error: 'User not found or wrong password' });
    })
    .catch(err => res.json({ error: err.sqlMessage }));
});

router.get('/loggedIn', (req, res) => {
    if(req.user && req.user.ID) {
        let user = req.user;
        const userToSend = {
            ID: user.ID,
            Username: user.Username,
            Fullname: user.Fullname,
            GroupID: user.GroupID
        }
        res.json(userToSend);
    }
    else {
        res.status(200).json({ error: "Not logged in" });
    }
});

router.get('/logout', (req, res) => {
    if(req.user && req.user.ID) {
        res.clearCookie('token', {
            secure: false, 
            httpOnly: true,
            //sameSite: 'None'
          }).json({ success: 'Logout was successful'});
        //res.status(200).json({ success: 'Log out was successful'});
    }
});

module.exports = router;
