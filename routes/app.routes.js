'use strict'
console.clear();
const router = require('express').Router();

const Visitors = require('../models/Visitors.model')

router.get('/', async (req,res)=>{        
    try {
        if(req.query.name === 'Anónimo' || req.query.name === ''|| req.query.name === undefined){                        
            const visitor = new Visitors(req.query);            
            visitor.name = 'Anónimo';
            visitor.count = 1;
            await visitor.save();
        }
        if(req.query.name !== ''){
            const existstVisitor = await Visitors.findOne({name : req.query.name})
            
            if(existstVisitor){
                existstVisitor.count += 1;
                await existstVisitor.save();
            } 
            if(!existstVisitor){
                const visitor = new Visitors(req.query);                
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