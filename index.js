// install & initialize npm (package manager), express, mongoose
// local install(s) via npm will be in ./node_modules/.bin/ (for the project)
// global installs are stored in  /usr/local/bin (Linux)

import express from 'express'

const app= express();//returns instance of express application to be used througout application

app.get('/',(req, res)=>{
    res.send('<h1>hello!!<h2>');

})

app.get('/oldPage',(req,res)=>{
    res.redirect(301,'/Newpage')
})

app.get('/newPage',(req,res)=>{
    res.send('<h1>Yo!!</h1>')
})

let middlleware1= (req,res,next) =>{
    console.log('m1: Authentication')
    next();
}

let middlleware2= (req,res,next) =>{
    console.log('m2: Session')
    next();
}
let a=[middlleware1,middlleware2];
app.get('/notThere',a,(req,res,next)=>{
    console.log('m3: Authorization')
    next();
},
(req,res)=>{

    res.status(404).send('<h1>:/</h1>')
}

)


let port=3000;
app.listen(port,()=>console.log(`Server is up on port ${port}`))