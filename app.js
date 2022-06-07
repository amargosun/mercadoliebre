const path = require ("path");
const express = require("express");
const app = express();
const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath))

app.get("/", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
});


app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})

app.listen(3030, ()=>{
    console.log("Mercadoliebre Esta On!")
});