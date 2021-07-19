'use strict'

const express = require('express');
const { ExpressHandlebars } = require('express-handlebars');
const path = require('path')
const app = express();
const hbs = require('express-handlebars');
const port = 3001;

// import routes
const routes = require('./routes/app.routes');
const { extname } = require('path');

// db configuration, database conection.
require('./config/db.config');

// expres config
app.use(express.urlencoded({extended : true}));

// set engine configuration
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
    runtimeOptions : {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    layoutsDir : path.join(app.get('views'),'layout'),
    extname : 'hbs',
    defaultLayout : 'main'
}))

app.set('view engine', 'hbs');

// routes
app.use('/', routes)




app.listen(port,()=> console.log(`App running in port ${port}`))
