const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)


// trim: true,
// It's basically there to ensure the strings you 
// save through the schema are properly trimmed. 
// If you add { type: String, trim: true } to a field 
// in your schema, then trying to save strings like 
// "  hello", or "hello ", or "  hello ", would end up 
// being saved as "hello" in Mongo - i.e. white spaces 
// will be removed from both sides of the string.