const express = require('express')
const { json } = require('body-parser')
const router = require('./routes/index')
const path = require('path')



const app = express()

const port = 3000;


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

app.get('/tes', (req, res) => {
    res.send('HAllo')
});

app.use('/', router);
