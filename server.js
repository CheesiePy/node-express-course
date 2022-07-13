const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json);


const mockUserData = [
    {name:'mikey'},
    {name:'Yugi'}
]

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users',
        users: mockUserData
    })
})
//colons are used as veriables that be viewed in the params
app.get('/users/:id', function(req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        massage: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req,res){
    // Typically passwoerds are encrypted using soomthing like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;
    
    // This should come from the database
    const mockUsername = 'mikey';
    const mockPassword = 'superSecret';

    if(username === mockUsername && password === mockPassword){
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'successfully logged in',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            succes: false,
            message: 'wrong username or password'
        })
    }
})


app.listen(8000, function () {
    console.log('server is running on port 8000')
})