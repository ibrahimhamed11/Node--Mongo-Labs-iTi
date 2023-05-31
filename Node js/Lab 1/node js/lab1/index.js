const fs=require('fs');
let productsDB= JSON.parse(fs.readFileSync("json.json","utf-8"))
let prodId = productsDB.length
let newObj = {name:'p5' , color:'yellow' , price:500 , id:++prodId}
productsDB.push(newObj)
productsDB[1].price = 600
productsDB.splice(3,1)
console.log(productsDB)
fs.writeFileSync("json.json",JSON.stringify(productsDB))

