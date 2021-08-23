const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Xử lý kết quả trả về cho việc submit từ form
app.use(express.urlencoded({
  extended: true
}))

// Xử lý kết quả trả về cho việc submit từ dạng khác axios, ajax, XMLHtt,...
app.use(express.json())

// HTTP logger
// app.use(morgan('combined'))

// Template handlebars

// Dòng này cho window
app.engine('hbs', exphbs({
  extname: 'hbs'
}))
// Dòng này cho linux
// app.engine('handlebars', exphbs)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})