import React from 'react'
import '../App.css'

const CreateDrink = () => {
  return (
    <div className='container'>
      <article>
        <header>
          <h1>Create Drink</h1>
        </header>
        <form action=''>
          <fieldset>
            <label>
              <input type='radio' name='temperature' value='hot' defaultChecked />
              Hot
            </label>
            <label>
              <input type='radio' name='temperature' value='iced' />
              Iced
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input type='radio' name='size' value='regular' defaultChecked />
              Regular
            </label>
            <label>
              <input type='radio' name='size' value='large' />
              Large
            </label>
          </fieldset>
          <fieldset>
            <label>
              <input type='radio' name='milk' value='none' defaultChecked />
              None
            </label>
            <label>
              <input type='radio' name='milk' value='dairy' />
              Dairy
            </label>
            <label>
              <input type='radio' name='milk' value='soy' />
              Soy
            </label>
            <label>
              <input type='radio' name='milk' value='almond' />
              Almond
            </label>
            <label>
              <input type='radio' name='milk' value='oat' />
              Oat
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input type='radio' name='flavor' value='none' defaultChecked />
              None
            </label>
            <label>
              <input type='radio' name='flavor' value='vanilla' />
              Vanilla
            </label>
            <label>
              <input type='radio' name='flavor' value='caramel' />
              Caramel
            </label>
            <label>
              <input type='radio' name='flavor' value='mocha' />
              Mocha
            </label>
          </fieldset>

          <input type='submit' value='Create' />
        </form>
      </article>
    </div>
  )
}

export default CreateDrink
