    const express = require("express");
    const app = express();
    let noOfRequest = 0;
    //middleware to calculate the number of times a client has hit your server 
    const calculateRequest = (req,res,next) => {
      req.startTime= Date.now();
      noOfRequest+=1;
      console.log(noOfRequest);
      next();
    }
    app.use(calculateRequest);


    app.get("/health-checkup",(req,res)=>{
      const kidneyId = req.query.kidneyId;
      const username = req.headers.username;
      const password = req.headers.password;
    //calculating the duration of the requests    
    try{
      if(username != "bhanu" || password != "pass" ){
        throw new Error("Wrong Details");
      }
      if(kidneyId != 1 && kidneyId !=2){
        throw new Error("Invalid Inputs!");
    }
    res.status(200).json({
      msg:"Chill, your kidneys are fineee"
    })
    }
    catch(error){
      if(error instanceof Error){
        const statusCode = error.message === "Wrong Details" ? 400: 403;
        res.status(statusCode).json({
          msg: error.message
        })
        return;
      }
    }
    finally{
    req.duration= Date.now()-req.startTime;
      const durationInSec = req.duration/1000;
      
      const formattedDuration = `${Math.floor(durationInSec)} seconds ${req.duration % 1000} milliseconds`;
      console.log(`${formattedDuration} is the average time taken by the server to respond`);

    
    }
    })

    app.listen(3001);
