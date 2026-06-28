import React, { useState, useEffect } from 'react'
import '../App.css'
import DrinksAPI from '../services/DrinksAPI'

const CreateDrink = () => {
  const [options, setOptions] = useState({})

  useEffect(() => {
    const fetchOptions = async () => {
      const options = await DrinksAPI.getOptions()
      console.log('options', options)
      setOptions(options)
    }

    fetchOptions()
  }, [])

  const createDrink = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    }
  }

  return (
    <div className='container'>
      <article>
        <header>
          <h1>Create Drink</h1>
        </header>
        <form>
          <input type='submit' value='Create' />
        </form>
      </article>
    </div>
  )
}

export default CreateDrink
