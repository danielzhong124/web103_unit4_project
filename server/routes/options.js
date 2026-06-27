import express from 'express'
import OptionsController from '../controllers/options.js'

const router = express.Router()

router.get('/:id', OptionsController.getOptionById)
router.get('/category/:category', OptionsController.getOptionsByCategory)

export default router
