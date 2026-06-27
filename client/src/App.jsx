import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewDrinks from './pages/ViewDrinks'
import EditDrink from './pages/EditDrink'
import CreateDrink from './pages/CreateDrink'
import DrinkDetails from './pages/DrinkDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateDrink />,
    },
    {
      path: '/drinks',
      element: <ViewDrinks />,
    },
    {
      path: '/drinks/:id',
      element: <DrinkDetails />,
    },
    {
      path: '/edit/:id',
      element: <EditDrink />,
    },
  ])

  return (
    <div className='app'>
      <Navigation />

      {element}
    </div>
  )
}

export default App
