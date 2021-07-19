'use stict'

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mongo-1',
{
    
    useNewUrlParser : true,
    useUnifiedTopology: true 
})

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'conection error:'))
db.once('open',()=> console.log('Conected'));

