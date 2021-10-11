const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app = express();
const geocode=require('./utils/geocode');
const forecast=require("./utils/forecast")

//Define paths for express config
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicPath))

//Routes

//Home page
app.get('/',(req,res)=>{
    res.render('index',{
        title:"Weather engine",
        msg:"Get current weather forecast",
        name: 'Reckon'
    })
})

//API endpoint
app.get('/weather', (req,res)=>{
    if(req.query.longitude && req.query.latitude){
        forecast(req.query)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send({
                error: err
            })
        })
    }
    else if(!req.query.address){
        res.send({
            error:"Address required"
        })
    }else{
        geocode(req.query.address)
        .then((data)=>{
            return forecast(data)
        })
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send({
                error: err
            })
        })
    }
    
   
})

//404 route
app.get('*',(req,res)=>{
    res.render('404', {
        title: '404',
        name: 'Reckon',
        errorMessage: 'Page not found.'
    })
})
app.listen(3000,()=>{
    console.log("Server running")
})