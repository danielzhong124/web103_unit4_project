import { pool } from './database.js'
import dotenv from 'dotenv'

dotenv.config()

const createDrinksTable = async () => {
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS drinks (
            id serial PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );
    `
  try {
    await pool.query(createTableQuery)
    console.log('✅ drinks table created successfully')
  } catch (error) {
    console.error('❌ error creating drinks table', error)
  }
}

const createSizesTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS sizes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      price DECIMAL(4, 2) NOT NULL
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('✅ size options table created successfully')
  } catch (error) {
    console.error('❌ error creating size options table', error)
  }
}

const createPreparationsTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS preparations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      price DECIMAL(4, 2) NOT NULL
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('✅ preparation options table created successfully')
  } catch (error) {
    console.error('❌ error creating preparation options table', error)
  }
}

const createSyrupsTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS syrups (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      price DECIMAL(4, 2) NOT NULL,
      image VARCHAR(255)
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('✅ syrup options table created successfully')
  } catch (error) {
    console.error('❌ error creating syrup options table', error)
  }
}

const createMilksTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS milks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      price DECIMAL(4, 2) NOT NULL
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('✅ milk options table created successfully')
  } catch (error) {
    console.error('❌ error creating milk options table', error)
  }
}

const createDrinksOptionsTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS milks (
      drink_id NOT NULL REFERENCES drinks(id) ON DELETE CASCADE,
      size_id NOT NULL REFERENCES sizes(id) ON DELETE CASCADE,
      preparation_id NOT NULL REFERENCES preparations(id) ON DELETE CASCADE,
      syrup_id NOT NULL REFERENCES syrups(id) ON DELETE CASCADE,
      milk_id NOT NULL REFERENCES milks(id) ON DELETE CASCADE,
      PRIMARY KEY (drink_id, size_id, preparation_id, syrup_id, milk_id)
    );
  `
}
