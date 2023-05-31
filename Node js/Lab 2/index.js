const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/welcome", function(req, res) {
    const username = req.query.username;
    res.send(`welcome Mr ${username}`);
});


app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    res.send(`welcome ${username}`);
});

app.get("/login-form", function(req, res) {
    res.send(`
    <form method="post" action="/login">
    <label for = "username">username:</label>
    <input type="text" name="username" id="username" >
    <label for = "password">password:</label>
    <input type = "password" name = "password" id="password">
    <input type="submit" value="Login">
    </form>  
    `);
});

app.get("/welcome-form", function(req, res) {
    res.send(`
    <form method="get" action="/welcome">
    <label for= "username">Useranme:</label>
    <input type="text" name="username" id="username">
    <input type="submit" value = "welcome">
    </form>
    `);
});

app.listen(3000, function() {
    console.log('server is listen');
})

/*Middleware functions in Express have access to the request object (req), the response object (res),
 and the next middleware function in the application's request-response cycle. Middleware functions can perform
  various tasks such as logging, authentication, and input validation, and they can also modify the request or response objects.*/