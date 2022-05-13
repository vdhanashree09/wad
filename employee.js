const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('employees',employeeSchema)