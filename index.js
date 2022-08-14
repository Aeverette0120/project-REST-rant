// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

const app = express()
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))



app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error')
  })
  
app.listen(process.env.PORT)
