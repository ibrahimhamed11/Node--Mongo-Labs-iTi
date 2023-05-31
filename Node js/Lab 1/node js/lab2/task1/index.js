// const express = require("express")
// const app = express()
// app.use(express.static('public'))
// app.get("/welcome" , function(req,res){
//     let name = req.query.name
//     res.send(`welcome ${name}`)
// })
// app.listen(9000,function(){
//     console.log("server listen")
// })

// post
const express = require("express")
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.post("/welcome" , function(req,res){
    let name = req.body.name
    res.send(`welcome ${name}`)
})
app.listen(5000,function(){
    console.log("server listen")
})