'use strict'
console.clear();
const router = require('express').Router();

const Visitors = require('../models/Visitors.model')

router.get('/', async (req,res)=>{    
    const visitor = new Visitors(req.query);
    const existstVisitor = await Visitors.findOne({name : req.query.name})

    try {
    if(req.query.name === undefined || req.query.name === ''){

        visitor.name = 'Anónimo';
        visitor.count = 1;
        await visitor.save();
    }
    if(req.query.name !== ''){
        if(existstVisitor){
            existstVisitor.count += 1;
            await existstVisitor.save();
        } 
        if(!existstVisitor){
            visitor.count = 1;
            await visitor.save();
        }        
                
    }    
    
    } catch (error) {
        console.log('error')
    }   

const visitors = await Visitors.find();
res.status(200).render('index',({visitors}))
console.log(visitors);

})

module.exports = router;