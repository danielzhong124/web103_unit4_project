import express from 'express'
import './config/dotenv.js'
import path from 'path'
import favicon from 'serve-favicon'
import drinksRouter from './routes/drinks.js'
import optionsRouter from './routes/options.js'

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(favicon(path.resolve('../', 'client', 'public', 'coffee.png')))
} else if (process.env.NODE_ENV === 'production') {
  app.use(favicon(path.resolve('public', 'coffee.png')))
  app.use(express.static('public'))
}

app.use('/drinks', drinksRouter)
app.use('/options', optionsRouter)

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Me Espresso API ☕</h1>')
})

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (_, res) => res.sendFile(path.resolve('public', 'index.html')))
}

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`)
})
