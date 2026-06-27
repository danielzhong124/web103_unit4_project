import express from 'express'
import DrinksController from '../controllers/drinks.js'

const router = express.Router()

router.get('/', DrinksController.getDrinks)
