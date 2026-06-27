import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import './config/dotenv.js'
import drinksRouter from './routes/drinks.js'
import optionsRouter from './routes/options.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(favicon(path.resolve('../', 'client', 'public', 'coffee.png')))
} else if (process.env.NODE_ENV === 'production') {
  app.use(favicon(path.resolve('public', 'coffee.png')))
  app.use(express.static('public'))
}

app.get('/api', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Me Espresso API ☕</h1>')
})

app.use('/api/drinks/', drinksRouter)
app.use('/api/options/', optionsRouter)

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (_, res) => res.sendFile(path.resolve('public', 'index.html')))
}

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`)
})
