const express = require("express");
const app = express();
let noOfRequest = 0;
//middleware to calculate the number of times a client has hit your server 
const calculateRequest = (req,res,next) => {
  noOfRequest+=1;
  console.log(noOfRequest);
  next();
}
app.use(calculateRequest);


app.get("/health-checkup",(req,res)=>{
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;


 if(username != "bhanu" || password != "pass" ){
  res.status(400).json({
    msg:"Wrong details"
  })
  return;
 }
 if(kidneyId != 1 && kidneyId !=2){
  res.status(403).json({
    msg:"Something's Up with your inputs!",
  })
  return;
 }
 res.status(200).json({
  msg:"Chill, your kidneys are fineee"
 })


})



app.listen(3001);
