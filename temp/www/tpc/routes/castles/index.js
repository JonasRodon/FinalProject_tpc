const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addCastle = require('./handlers/addCastle')

router.get('/', getAll)
router.post('/', addCastle)

module.exports = router

