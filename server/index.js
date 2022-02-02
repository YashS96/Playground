// install & initialize npm (package manager), express, mongoose
// local install(s) via npm will be in ./node_modules/.bin/ (for the project)
// global installs are stored in  /usr/local/bin (Linux)
"use strcit";

//Libs
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

//components
import route from './routes/routes.js'
import connection from './connection.db.js'


const app= express();//returns instance of express application to be used througout application


app.use(bodyParser.json({extended : true}));// for our post reqs, we parse body with content type JSON and put it in req obj body prop
app.use(bodyParser.urlencoded({extended : true}));// form data is usually url encoded data so we need this too
                                                 //the extended field ensures that req.body can have any type of values and not just strings
app.use(cors());// diff servers for react and node

app.use('/',route)
connection();


// app.use((req,res)=>{
//     console.log('middleware for all!')
// })

// //Added  routes
// app.get('/',(req, res)=>{ // This won't even hit if all the route endpoints returned some response
//     res.send('<h1>hello!!<h2>');//res.send({},[body],'')
//     // res.end();
//     // res.render('/path');
//     // res.redirect(statusCode,'/NewPath')
// })

// app.get('/oldPage',(req,res)=>{
//     res.redirect(301,'/Newpage')
// })

// app.get('/newPage',(req,res)=>{
//     res.send('<h1>Yo!!</h1>')
// })

// let middlleware1= (req,res,next) =>{
//     console.log('m1: Authentication')
//     next();
// }

// let middlleware2= (req,res,next) =>{
//     console.log('m2: Session')
//     next();
// }
// let a=[middlleware1,middlleware2];

// app.get('/notThere',a,(req,res,next)=>{
//     console.log('m3: Authorization')
//     next();
// },
// (req,res)=>{

//     res.status(404).send('<h1>:/</h1>')
// })

// app.get('/product/:id',(req,res,next)=>{
//     console.log(req.url);
//     console.log(req.ip);
//     console.log(req.params.id); // user/123 or product/234212
//     console.log(req.protocol);
//     console.log(req.query); //qureyString
//     console.log(req.method); // get
//     if(req.params.id =='0')
//         next('route')
//     else    next()
// },
// (req,res)=>{
//     res.send('hmmmm....')
// }
// )
// app.get('/product/:id',(req,res)=>{
//     res.send('hmmm. Ok')
// })

let port=3000;
app.listen(port,()=>console.log(`Server is up on port ${port}`))