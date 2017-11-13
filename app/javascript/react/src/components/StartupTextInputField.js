import React from 'react'

const StartupTextInputField = props => {
  return(
    <label>
      <div className="form-field">
        <input
          className="form-text-field"
          placeholder={props.label}
          type='text'
          value={props.value}
          name={props.name}
          onChange={props.handleChange}
        />
      </div>
    </label>
  )
}

export default StartupTextInputField
