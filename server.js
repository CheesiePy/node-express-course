const express = require('express')
const app = express()

const mockUserData = [
    {name:'mikey'},
    {name:'Yugi'},
]

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users',
        users: mockUserData
    })
})

app.get('/users/:id',function(req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        massage: 'got one user',
        user: req.params.id
    })
})

app.listen(8000, function () {
    console.log('server is running on port 8000')
})