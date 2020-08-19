// A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'pug') //view engine

// The path to index.pug will be provided in process.argv[3]. 
app.set('views', process.argv[3]||path.join(__dirname, 'templates')) 


app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
    
  })

app.listen(process.argv[2])

//SOLUTION

// const express = require('express')
// const app = express()
// app.set('view engine', 'pug')
// app.set('views', process.argv[3])
// app.get('/home', function(req, res) {
//   res.render('index', {date: new Date().toDateString()})
// })
// app.listen(process.argv[2])