'use strict'

const mongoose = require('mongoose');

// mongoose schema model
const Schema = mongoose.Schema;

const VisitorsSchema = new Schema({
    count : {
        type : Number,
    },
    name :{
        type : String,
        require: true
    }

})



module.exports = mongoose.model('Visitors',VisitorsSchema)