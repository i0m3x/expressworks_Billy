const express = require('express')

const app = express()

app.get('/search', function(req,res){
    res.send(req.query)
    
})

app.listen(process.argv[2])

//SOLUTION:

// const express = require('express')
// const app = express()

// app.get('/search', function(req, res){
//   const query = req.query
//   res.send(query)
// })

// app.listen(process.argv[2])

// information in the form is added to the end of the action URL as a query string. The browser might make a request to this URL:

// GET /example/message.html?name=Jean&message=Yes%3F HTTP/1.1
// The question mark indicates the end of the path part of the URL and the start of the query. It is followed by pairs of names and values, corresponding to the name attribute on the form field elements and the content of those elements, respectively. An ampersand character (&) is used to separate the pairs.

// https://eloquentjavascript.net/18_http.html