const express = require('express')
const Port = 5000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json("Hello Game Store");
})


app.listen(Port, () => {
   
    console.log(`Server is running in Port : ${Port}`)

})