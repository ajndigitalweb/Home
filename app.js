const express = require( "express")
//import 'cors'

const cors = require("cors")
const app = express()

app.use(cors)


app.route('/',(req,res) => {
    res.send('app running')
})

app.get('/c', (req,res)=>{
    res.send("q")
})
app.listen(2552)