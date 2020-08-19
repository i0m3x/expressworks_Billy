const express = require('express')
const app = express()

app.use(express.static(process.argv[3]|| path.join(__dirname, 'public')))

app.listen(process.argv[2])

//syntax
//structure
//problem structure

// we did not have  const path = require('path') but it worked!