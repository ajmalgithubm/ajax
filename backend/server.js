const express = require('express');
const app = express();
const cors = require('cors');
const userHelpers = require('../backend/Helpers/userHelpers')
 
app.use(cors())
app.use(express.json())
app.use(express.static('view'))

app.post('/login',async (req, res) => {
   const doc = await userHelpers.addText(req.body);
   const textObject = await userHelpers.getText(doc.insertedId)
   res.json(textObject)
})
 


app.listen(3000, () => {
    console.log("server is Runnig");
})

 