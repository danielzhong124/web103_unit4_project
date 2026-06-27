import { pool } from '../config/database.js'

const getAllDrinks = async (req, res) => {
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
    const id = parseInt(req.params.id)
    const result = await pool.query(selectQuery, [id])

    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const createDrink = async (req, res) => {
  try {
    const { name, size_option_id, preparation_option_id, syrup_option_id, milk_option_id } =
      req.body
    const insertQuery = `INSERT INTO drinks (name, size_option_id, preparation_option_id, syrup_option_id, milk_option_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`
    const values = [name, size_option_id, preparation_option_id, syrup_option_id, milk_option_id]
    const result = await pool.query(insertQuery, values)

    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const updateDrink = async (req, res) => {
  try {
    const { id } = parseInt(req.params)
    const { name, size_option_id, preparation_option_id, syrup_option_id, milk_option_id } =
      req.body
    const updateQuery = `UPDATE drinks SET name = $1, size_option_id = $2, preparation_option_id = $3, syrup_option_id = $4, milk_option_id = $5 WHERE id = $6 RETURNING *`
    const values = [
      name,
      size_option_id,
      preparation_option_id,
      syrup_option_id,
      milk_option_id,
      id,
    ]
    const result = await pool.query(updateQuery, values)

    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const deleteDrink = async (req, res) => {
  try {
    const { id } = parseInt(req.params)
    const deleteQuery = `DELETE FROM drinks WHERE id = $1 RETURNING *`
    const result = await pool.query(deleteQuery, [id])

    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getAllDrinks,
  getDrinkById,
  createDrink,
  updateDrink,
  deleteDrink,
}
