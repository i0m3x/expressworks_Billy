const express = require('express')
const fs = require('fs')

const app = express()

app.get('/books', function (req,res){
    
        fs.readFile( process.argv[3], 'utf8', (err, data) =>{
            const file = JSON.parse(data)
            res.json(file)
        })
 
    
})


app.listen(process.argv[2])
// 2041 18AUG2020

//do todos - change endpoint
//get request

//serve static files - starting point
//serve html and js from some directory using express

//then add a route like 'app/get/todos'

//don't need to start with reading from a file

//then set into a file

// post request add a todo

//make a route for that

//last feature was 'delete'

//make a 'delete' route to figure out which to delete

//only tested happy path above
//sol'n checks for errors
// can respond as if it was ok, but it was wrong, and then the client receives incorrect data whilst having a 200 success - which is why we send up something went wrong

//exception could be thrown and server could crash

//SOLUTION

// const express = require('express')
// const app = express()
// const fs = require('fs')

// app.get('/books', function(req, res){
//   const filename = process.argv[3]
//   fs.readFile(filename, function(e, data) {
//     if (e) return res.sendStatus(500)
//     try {
//       books = JSON.parse(data)
//     } catch (e) {
//       res.sendStatus(500)
//     }
//     res.json(books)
//   })
// })

// app.listen(process.argv[2])

