const express = require('express');

// const BoggleLetters = require('./boggleLettesModel')

const router = express.Router();

const boggle = require('node-boggle-solver')


router.post('/', async (req, res, next) => {
    try {
        const { lettersList } = req.body;

        const solver = boggle()

        const wordsFound = {};

        solver.solve(lettersList, function(err, result) {
            if (err) {
                throw(err);
            }
        
            // wordsFound.allWords = result.list
            wordsFound.lettersList = lettersList
            wordsFound.totalWords = result.list.length
            wordsFound.letters3 = result.lengthOf(3)
            wordsFound.letters4 = result.lengthOf(4)
            wordsFound.letters5 = result.lengthOf(5)
            wordsFound.letters6 = result.lengthOf(6)
            wordsFound.letters7 = result.lengthOf(7)
            wordsFound.letters8 = result.lengthOf(8)
            wordsFound.letters9 = result.lengthOf(9)
            wordsFound.letters10 = result.lengthOf(10)
            wordsFound.letters11 = result.lengthOf(11)
            wordsFound.letters12 = result.lengthOf(12)
            wordsFound.letters13 = result.lengthOf(13)
            wordsFound.letters14 = result.lengthOf(14)
            wordsFound.letters15 = result.lengthOf(15)

        })

        res.status(200).json({
            wordsFound: wordsFound
        })

    } catch(err) {
        next(err)
    }
})

module.exports = router

