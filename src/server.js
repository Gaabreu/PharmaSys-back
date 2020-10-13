const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const bodyParser = require ('body-parser');

const app = express()

app.use(routes);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//notFound
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})


//catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})



app.listen(8081, () => console.log('Server is running'));