import { pool } from '../config/database.js'

const getDrinks = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM drinks ORDER BY id`
    const result = await pool.query(selectQuery)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getDrinkById = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM drinks WHERE id = $1`
    const id = req.params.id
    const result = await pool.query(selectQuery, [id])

    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const createDrink = async (req, res) => {}
const updateDrink = async (req, res) => {}
const deleteDrink = async (req, res) => {}

export default {
  getDrinks,
}
