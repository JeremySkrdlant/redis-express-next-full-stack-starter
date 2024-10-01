const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());

app.get('/', (request, response) => {
     response.send("It Works!")
})

app.listen(3005, () => {
    console.log(`Server is Listening on 3005`)
})