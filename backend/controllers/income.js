const IncomeModel = require("../models/IncomeModel")

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeModel
}