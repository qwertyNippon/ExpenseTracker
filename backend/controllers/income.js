const IncomeSchema = require("../models/IncomeModel")

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date) {
            return res.status(400).json({message: "All fields are required"})
        }
        //validations
        if(amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: "All fields are required"})
        }
        await income.save()
        res.status(200).json({message : 'Income added'})
    } catch (error) {
        res.status(500).json({message : 'Server error'})
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message : 'Server error'})       
    }
}

    exports.deleteIncome = async (req, res) => {
        const {id} = req.params;
        IncomeSchema.findByIdAndDelete(id)
            .then((income) => {
                res.status(200).json({message : 'Income deleted'})       
            })
            .catch((error) => {
                res.status(500).json({message : 'Server error'})       
            })
}