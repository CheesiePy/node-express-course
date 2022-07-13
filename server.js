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

app.listen(8000, function () {
    console.log('server is running on port 8000')
})