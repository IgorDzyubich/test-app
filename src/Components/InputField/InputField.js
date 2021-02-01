import React from 'react'
import classes from './InputField.module.css'
import Navbar from '../Navbar/Navbar.js'

const InputField = (props) => {

    const saveText = (e) => {
        e.preventDefault()
        const input = document.querySelector('#input')
        const output = document.querySelector('#output')
        output.value = input.value
    }

  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.content}>
          <div>
          <label htmlFor="input">Input Field:</label>
        <textarea id="input" name="story" rows="5" cols="150">
        </textarea>
          </div>
        <div>
        <label htmlFor="output">Output Field:</label>
        <textarea id="output" name="story" rows="5" cols="150">
        </textarea>
        </div>
        <button type="submit" className={classes.submitBtn} onClick={saveText}>SAVE</button>
      </div>
    </div>
  )
}

export default InputField
