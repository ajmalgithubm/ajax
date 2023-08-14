const express = require('express');
const app = express();
const cors = require('cors');
const userHelpers = require('../backend/Helpers/userHelpers')
 
app.use(cors())
app.use(express.json())
app.use(express.static('view'))

app.post('/login', (req, res) => {
    userHelpers.addText(req.body).then((doc) => {
        console.log("data added successfully")
    }).catch(err => {
        console.log("some error occur when adding the data")
    })
})
 


app.listen(3000, () => {
    console.log("server is Runnig");
})

 