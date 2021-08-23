const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template handlebars

// Dòng này cho window
app.engine('hbs', exphbs({
  extname: 'hbs'
}))
// Dòng này cho linux
// app.engine('handlebars', exphbs)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('home');
})

app.get('/news', (req, res) => {
  // res.send('Hello World!')
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})