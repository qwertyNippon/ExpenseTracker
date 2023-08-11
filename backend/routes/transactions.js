const { addIncome } = require('../controllers/income')

const router = require('express').Router()



router.gpost('/add-income', addIncome)

module.exports = router