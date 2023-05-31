// // const fs = require('fs');
// // const { json } = require('stream/consumers');

// // fs.readFile('data.json', 'utf-8', function(err, ProductsDb) {
// //     if (err) {
// //         console.log("error")
// //     } else
// //         console.log(ProductsDb)
// // })

// // let products = fs.readFileSync('data.json', 'utf-8');
// // products = JSON.parse(products);
// // console.log(typeof(products));

// // let myOrder = { "name": "p4", "color": "yellow", "price": 400 }
// // products.push(myOrder);
// // fs.writeFileSync("data.json", JSON.stringify(products)); // convert to string

// // // fs.appendFileSync('data.json',JSON.stringify(o));

// // products.pop(myOrder);
// // fs.writeFileSync("data.json", JSON.stringify(products)); // convert to string
// const fs = require('fs');

// // Read the data from file and parse it into an array of objects
// let products = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// // Find the highest id in the array and increment it by 1 to get the new id
// const newId = products.reduce((maxId, product) => Math.max(maxId, product.id), 0) + 1;

// // Create a new product object with the new id
// const newProduct = {
//     id: newId,
//     name: "Product " + newId,
//     price: 10.0
// };

// const newProduct2 = {
//     id: newId,
//     name: "Product " + newId,
//     price: 20.0
// };


// // Push the new product object to the array
// products.push(newProduct, newProduct2);

// // Write the updated array back to the file
// fs.writeFileSync("data.json", JSON.stringify(products));

// console.log("New product added:", newProduct, "\n", newProduct2);
















const fs = require('fs');
let productsDB = fs.readFileSync('data.json', 'utf8');


console.log(productsDB)

productsDB = JSON.parse(productsDB);
// const newProduct = { name: "p4", color: "green", price: 400 };
// newProduct.id = productsDB.length + 1;
// productsDB.push(newProduct);
let prodId = productsDB.length
let newObj = { name: 'p5', color: 'yellow', price: 500, id: ++prodId }
productsDB.push(newObj)

const index = 1;
const updatedProduct = { name: "p2", color: "yellow", price: 250 };
productsDB[index] = {...productsDB[index], ...updatedProduct };

console.log(productsDB);

//const indexToDelete = 1;
productsDB.splice(2, 1);


console.log(productsDB);