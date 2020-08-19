const express = require('express')
const app = express()
//const stylus = require('stylus')

app.use(require('stylus').middleware(process.argv[3])) //inject
app.use(express.static(process.argv[3])) //serve

app.listen(process.argv[2])

//stylus sets up css

//line 6 says, 'now that files have been injected, let's serve these template files'

// const express = require('express')
// const app = express()

// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));


// app.listen(process.argv[2])