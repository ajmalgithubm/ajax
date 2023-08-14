const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userData = [
    { id: 1, name: 'Ajmal' },
    { id: 2, name: 'Amjed' },
    { id: 3, name: 'Akshay' },
    { id: 3, name: 'Amal' }
]

app.use(express.static('view'))


app.get('/user', (req, res) => {
    console.log("user get API Called");
    res.json(userData)
})

app.post('/addUser', (req, res) => {
    console.log('body data',req.body)
})

app.get('/', (req, res) => {
    res.send("Welcome")
})





app.listen(3000, () => {
    console.log("server is Runnig");
})

