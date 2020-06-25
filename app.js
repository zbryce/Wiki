const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const layout = require('/Users/zachbryce/wikistack/views/layout.js')
const model = require('./models')
const db = model.db


app.use(morgan('dev'))
app.use(express.static(path.join(__dirname + "/public/stylesheets")));
// app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send(layout(""))
})
const PORT = 1339
async function callModels(){
    
    await model.db.sync({force: true})
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}
callModels()

