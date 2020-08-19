// GOOD OLD FORM

const express = require('express')
const app = express()
//write a route



//A middleware is added by calling use() on the application and passing the middleware as a parameter.
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res){
    res.send(req.body.str.split('').reverse().join('')) //res is the callback
})
app.listen(process.argv[2])

//SOLUTION:

// const express = require('express')
//     const bodyParser = require('body-parser')
//     const app = express()
    
//     app.use(bodyParser.urlencoded({extended: false}))
    
//     app.post('/form', function(req, res) {
//       res.send(req.body.str.split('').reverse().join(''))
//     })
    
//     app.listen(process.argv[2])