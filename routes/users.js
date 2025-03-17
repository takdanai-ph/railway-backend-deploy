const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User.js');

router.get('/', (req, res, next) => {
    User.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    })
})

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.post('/', (req, res, next) => {
    User.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.put('/:id', (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.delete('/:id', (req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

module.exports = router;
