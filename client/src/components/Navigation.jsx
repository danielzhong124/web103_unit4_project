import React from 'react'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>Me Espresso ☕</h1>
        </li>
      </ul>

      <ul>
        <li>
          <a href='/' role='button'>
            Create Drink
          </a>
        </li>
        <li>
          <a href='/drinks' role='button'>
            View Drinks
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
