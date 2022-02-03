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
            wordsInfo.lettersList = lettersList
            wordsInfo.totalWords = result.list.length
            // wordsInfo.wordsFound.letters3 = result.lengthOf(3)
            // wordsInfo.wordsFound.letters4 = result.lengthOf(4)
            // wordsInfo.wordsFound.letters5 = result.lengthOf(5)
            // wordsInfo.wordsFound.letters6 = result.lengthOf(6)
            // wordsInfo.wordsFound.letters7 = result.lengthOf(7)
            // wordsInfo.wordsFound.letters8 = result.lengthOf(8)
            // wordsInfo.wordsFound.letters9 = result.lengthOf(9)
            // wordsInfo.wordsFound.letters10 = result.lengthOf(10)
            // wordsInfo.wordsFound.letters11 = result.lengthOf(11)
            // wordsInfo.wordsFound.letters12 = result.lengthOf(12)
            // wordsInfo.wordsFound.letters13 = result.lengthOf(13)
            // wordsInfo.wordsFound.letters14 = result.lengthOf(14)
            // wordsInfo.wordsFound.letters15 = result.lengthOf(15)
            wordsInfo.wordsFound.push([3,...result.lengthOf(3)])
            wordsInfo.wordsFound.push([4,...result.lengthOf(4)])
            wordsInfo.wordsFound.push([5,...result.lengthOf(5)])
            wordsInfo.wordsFound.push([6,...result.lengthOf(6)])
            wordsInfo.wordsFound.push([7,...result.lengthOf(7)])
            wordsInfo.wordsFound.push([8,...result.lengthOf(8)])
            wordsInfo.wordsFound.push([9,...result.lengthOf(9)])
            wordsInfo.wordsFound.push([10,...result.lengthOf(10)])
            wordsInfo.wordsFound.push([11,...result.lengthOf(11)])
            wordsInfo.wordsFound.push([12,...result.lengthOf(12)])
            wordsInfo.wordsFound.push([13,...result.lengthOf(13)])
            wordsInfo.wordsFound.push([14,...result.lengthOf(14)])
            wordsInfo.wordsFound.push([15,...result.lengthOf(15)])


        })

        res.status(200).json({
            wordsInfo: wordsInfo
        })

    } catch(err) {
        next(err)
    }
})

module.exports = router

