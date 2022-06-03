const express = require("express"); 
const path=require ('path');
const {engine} = require('./routes/routesAdmin')
const app = express();
app.engine('handlebars',engine({
    defaultLayout:'main',
    runtimeOptions:{
        allowProtoProprietsByDefault:true,
        allowProtoMethodsByDefault:true,

    },

}))

app.set ('view.engine', 'handlebars');

