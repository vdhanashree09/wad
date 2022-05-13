const express=require('express');
const mongoose = require('mongoose');

url= 'mongodb://localhost:27017/EmployeeDB';

const app = express();
mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=>{
    console.log('Connected to Database')
})

app.use(express.json())
const employeeRouter = require('./employees')
app.use('/employees',employeeRouter)
app.listen(8082, ()=>{
    console.log("Server started!!!")
    
})