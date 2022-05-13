const express = require('express');
const router = express.Router();
const Employee = require('./employee');

router.get('/', async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.json(employees)
    }
    catch(err){
        res.send('Error is:'+err)
    }
})

router.post('/',async(req,res)=>{
console.log(req)
    const employee = new Employee({
        name: req.body.name,
        designation: req.body.designation

    })
    try{
        const e1 = await employee.save();
        res.json(e1);
    }
    catch(err){
        res.send('Erroe is :'+err)
    }
})
module.exports= router
