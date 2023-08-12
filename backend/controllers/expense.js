const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const expense = ExpenseSchema({
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
        await expense.save()
        res.status(200).json({message : 'Expense added'})
    } catch (error) {
        res.status(500).json({message : 'Server error'})
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message : 'Server error'})       
    }
}

    exports.deleteExpense = async (req, res) => {
        const {id} = req.params;
        ExpenseSchema.findByIdAndDelete(id)
            .then((expense) => {
                res.status(200).json({message : 'Expense deleted'})       
            })
            .catch((error) => {
                res.status(500).json({message : 'Server error'})       
            })
}