const express = require('express')
const app = express()

const mockUserData = [
    {name:"mikey", age:29},
    {name:"Yugi", age:26},
]
app.get('/users', function(req, res){
    res.jseon({
        success: true,
        message: 'successfully got users',
        users: mockUserData
    })
})

app.listen(8000, function () {
    console.log("server is running on port 8000")
})