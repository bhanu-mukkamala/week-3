const express = require("express");
const app = express();

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
