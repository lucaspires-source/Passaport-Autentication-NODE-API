const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const moongoose = require('mongoose');
const app = express();


//DB Config

const db = require('./config/keys').MongoURI;
//connect do Mongo

moongoose.connect(db,{useNewUrlParser:true},  { useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err));
//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
 //Bodyparser
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));