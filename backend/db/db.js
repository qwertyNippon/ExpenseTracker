const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    } catch (error) {
        console.log('DB Connection ERROR');
    }
}
// .set('strictQuery') makes it so that input passed 
// into your models that are not 
// specified aren't saved.

module.exports = {db}