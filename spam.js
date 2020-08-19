const express = require('express')
const app = express()

app.put('/message/:id', function(req, res){
    res.send(require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex'))
})

app.listen(process.argv[2])

//SOLUTION:

// const express = require('express')
// const app = express()

// app.put('/message/:id', function(req, res){
//   const id = req.params.id
//   const str = require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')
//   res.send(str)
// })

// app.listen(process.argv[2])