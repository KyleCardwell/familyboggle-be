const express = require('express');

// const BoggleLetters = require('./boggleLettesModel')

const router = express.Router();

const boggle = require('node-boggle-solver')


router.post('/', async (req, res, next) => {
    try {
        const { lettersList } = req.body;

        const solver = boggle()

        const wordsInfo = {
            wordsFound: []
        };

        solver.solve(lettersList, function(err, result) {
            if (err) {
                throw(err);
            }
        
            // wordsFound.allWords = result.list
            wordsInfo.coordinates = result.full
            wordsInfo.lettersList = lettersList
            wordsInfo.totalWords = result.list.length

            // add words found as a nested array to be received by the front end
            for (let i = 3; i <= 15; i++) {
                wordsInfo.wordsFound.push([i, ...result.lengthOf(i)])
            }

        })

        res.status(200).json({
            wordsInfo: wordsInfo
        })

    } catch(err) {
        next(err)
    }
})

module.exports = router

