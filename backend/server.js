const express=require('express');
const helmet = require('helmet');
const  dotenv=require("dotenv");
const router=require('./routes/router')
const app =express();

//portion of router................create seprate router
app.get('/',(req,res)=>{
    res.send("<h1>welcome to node server</h1>")
})


app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'"],
          connectSrc: ["'self'"],
        },
      },
    })
  );
app.use('/router',router);

const PORT= 8080;
app.listen(process.env.PORT || PORT,()=>{
    console.group('server started on port 8080');
})