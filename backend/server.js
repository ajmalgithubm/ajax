const express = require('express');
const app = express();
const cors = require('cors');
 
app.use(cors())
app.use(express.json())
app.use(express.static('view'))

app.post('/login', (req, res) => {
    console.log("API is called");
})
 


app.listen(3000, () => {
    console.log("server is Runnig");
})

 