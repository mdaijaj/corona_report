const express=require('express')
const bodyParser=require('body-parser')
const api = require('novelcovid');
const ejs= require('ejs')

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/Routes/views'))
app.use(express.static(__dirname + '../public'));
app.set('view engine', 'ejs') 
 
// you can choose which URL to use, this will not change the behaviour of the API
api.settings({
    baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})

//routes
const router=express.Router();
app.use('/', router)
require('./controller/routes')(router, api)

app.use('/', router)
require('./controller/all_api')(router, api)

// //dummy data
// app.use('/', router)
// require('./controller/api data/api')(router, api)

//server 
var port=4000
app.listen(port,()=>{
    console.log("server is listening this port", port)
})