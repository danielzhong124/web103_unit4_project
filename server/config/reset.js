import { pool } from './database.js'
import './dotenv.js'
import optionsData from '../data/data.js'

const createDrinksTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS drinks;

    CREATE TABLE IF NOT EXISTS drinks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,

      size_option_id INT NOT NULL REFERENCES options(id),
      preparation_option_id INT NOT NULL REFERENCES options(id),
      milk_option_id INT NOT NULL REFERENCES options(id),
      syrup_option_id INT NOT NULL REFERENCES options(id)
    );
  `
  try {
    await pool.query(createTableQuery)
    console.log('✅ drinks table created successfully')
  } catch (error) {
    console.error('❌ error creating drinks table', error)
  }
}

const createOptionsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS options CASCADE;

    CREATE TABLE IF NOT EXISTS options (
      id SERIAL PRIMARY KEY,
      category VARCHAR(20) NOT NULL,
      name VARCHAR(50) NOT NULL,
      price DECIMAL(4, 2) NOT NULL DEFAULT 0,
      image VARCHAR(255)
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('✅ options table created successfully')
  } catch (error) {
    console.error('❌ error creating options table', error)
  }
}

const seedOptionsTable = async () => {
  await createOptionsTable()

  optionsData.forEach((option) => {
    const insertQuery = {
      text: `INSERT INTO options (category, name, price, image) VALUES ($1, $2, $3, $4)`,
    }

    const values = [option.category, option.name, option.price, option.image || null]

    pool.query(insertQuery, values, (error, result) => {
      if (error) {
        console.error('❌ error inserting option', error)
        return
      }

      console.log(`✅ ${option.category}:${option.name} seeded successfully`)
    })
  })
}

createDrinksTable()
seedOptionsTable()
