import React from 'react'

const StartupTextAreaField = props => {
  return(
    <label>
      <div>
        <input
          className="form-field-desc"
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

export default StartupTextAreaField
