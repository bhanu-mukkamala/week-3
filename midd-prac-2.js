const express = require("express");
const app = express();
const port = 3001;

app.use(calculateRequest);

app.get("/health-checkup",(req,res)=>{
  res.json({
    msg:"Your health is fineese",
  })
})


app.listen(port);