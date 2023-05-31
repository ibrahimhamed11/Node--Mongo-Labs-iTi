const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json())
app.get("/products/add",function(req,res){
    const data = JSON.parse(fs.readFileSync("./json.json"))
    let number = data.length
    data.push({
        id:`${++number}`,
        name: `product ${number}`,
        description : `description of product ${number}`,
        price : `${number * 10}`
    })
    fs.writeFileSync("json.json",JSON.stringify(data))
    res.send("data added")
})
app.get("/products/get/:index",function(req,res){
    const data = JSON.parse(fs.readFileSync("./json.json"))
    const index = req.params.index;
    res.send(data[index-1])
})
app.get("/products/delete/:index",function(req,res){
    const data = JSON.parse(fs.readFileSync("./json.json"))
    const index = req.params.index;
    data.splice(index-1,1)
    fs.writeFileSync("json.json",JSON.stringify(data))
    res.send("deleted")
})
app.get("/products/update/:index/:price",function(req,res){
    const data = JSON.parse(fs.readFileSync("./json.json"))
    const index = req.params.index;
    const price = req.params.price;
    data[index-1].price = price
    fs.writeFileSync("json.json",JSON.stringify(data))
    res.send("deleted")
})
app.listen(4000, function(){
    console.log('Server listned');
  });
