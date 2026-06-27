import { pool } from '../config/database.js'

const getOptionsByCategory = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM options WHERE category = $1 ORDER BY id`
    const result = await pool.query(selectQuery)
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getOptionById = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM options WHERE id = $1`
    const id = parseInt(req.params.id)
    const result = await pool.query(selectQuery, [id])

    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default { getOptionsByCategory, getOptionById }
