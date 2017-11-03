import React, { Component } from 'react'
import StartupTextInputField from '../components/StartupTextInputField'

class StartupFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      startupName: '',
      startupCategory: '',
      startupDescription: '',
      startupDesiredFunding: '',
      startupCurrentFunding: '',
      startupSharesAvailable: '',
      startupPhotoUrl: '',
      startupStartDate: '',
      startupEndDate: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleDesiredFundingChange = this.handleDesiredFundingChange.bind(this)
    this.handleCurrentFundingChange = this.handleCurrentFundingChange.bind(this)
    this.handleSharesAvailableChange = this.handleSharesAvailableChange.bind(this)
    this.handlePhotoUrlChange = this.handlePhotoUrlChange.bind(this)
    this.handleStartDate = this.handleStartDate.bind(this)
    this.handleEndDate = this.handleEndDate.bind(this)

    this.validateNameChange = this.validateNameChange.bind(this)
    this.validateCategoryChange = this.validateCategoryChange.bind(this)
    this.validateDescriptionChange = this.validateDescriptionChange.bind(this)
    this.validateDesiredFundingChange = this.validateDesiredFundingChange.bind(this)
    this.validateCurrentFundingChange = this.validateCurrentFundingChange.bind(this)
    this.validateSharesAvailableChange = this.validateSharesAvailableChange.bind(this)
    this.validatePhotoUrlChange = this.validatePhotoUrlChange.bind(this)
    this.validatevalidateStartDate = this.validateStartDate.bind(this)
    this.validateEndDate = this.validateEndDate.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleClearForm() {
    this.setState({
      startupName: '',
      startupCategory: '',
      startupDescription: '',
      startupDesiredFunding: '',
      startupCurrentFunding: '',
      startupSharesAvailable: '',
      startupPhotoUrl: '',
      startupStartDate: '',
      startupEndDate: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (
      this.validateNameChange(this.state.startupName) &&
      this.validateCategoryChange(this.state.startupCategory) &&
      this.validateDescriptionChange(this.state.startupDescription) &&
      this.validateDesiredFundingChange(this.state.startupDesiredFunding) &&
      this.validateCurrentFundingChange(this.state.startupCurrentFunding) &&
      this.validateSharesAvailableChange(this.state.startupSharesAvailable) &&
      this.validatePhotoUrlChange(this.state.startupPhotoUrl) &&
      this.validatevalidateStartDate(this.state.startupStartDate) &&
      this.validateEndDate(this.state.startupEndDate)
    ) {
      let formPayload = {
        name: this.state.startupName,
        category: this.state.startupCategory,
        description: this.state.startupDescription,
        desired_funding: this.state.startupDesiredFunding,
        current_funding: this.state.startupCurrentFunding,
        shares_available: this.state.startupSharesAvailable,
        photo_url: this.state.startupPhotoUrl,
        start_date_date: this.state.startupStartDate,
        end_date_date: this.state.startupEndDate,
        user_id: this.props.user.id
      }
      this.props.handleSubmit(formPayload)
      this.handleClearForm()
    }
  }


  handleNameChange(event) {
    this.validateNameChange(event.target.value)
    this.setState({ startupName: event.target.value })
  }
  handleCategoryChange(event) {
    this.validateCategoryChange(event.target.value)
    this.setState({ startupCategory: event.target.value })
  }
  handleDescriptionChange(event) {
    this.validateDescriptionChange(event.target.value)
    this.setState({ startupDescription: event.target.value })
  }
  handleDesiredFundingChange(event) {
    this.validateDesiredFundingChange(event.target.value)
    this.setState({ startupDesiredFunding: event.target.value })
  }
  handleCurrentFundingChange(event) {
    this.validateCurrentFundingChange(event.target.value)
    this.setState({ startupCurrentFunding: event.target.value })
  }
  handleSharesAvailableChange(event) {
    this.validateSharesAvailableChange(event.target.value)
    this.setState({ startupSharesAvailable: event.target.value })
  }
  handlePhotoUrlChange(event) {
    this.validatePhotoUrlChange(event.target.value)
    this.setState({ startupPhotoUrl: event.target.value })
  }
  handleStartDate(event) {
    this.validateStartDate(event.target.value)
    this.setState({ startupStartDate: event.target.value })
  }
  handleEndDate(event) {
    this.validateEndDate(event.target.value)
    this.setState({ startupEndDate: event.target.value })
  }

  validateNameChange(name) {
    if (name === '' || name === ' ') {
      let newError = { startupName: 'Name may not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupName
      this.setState({ errors: errorState })
      return true
    }
  }

  validateCategoryChange(category) {
    if (category === '') {
      let newError = { startupCategory: 'You must select a category.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupCategory
      this.setState({ errors: errorState })
      return true
    }
  }

  validateDescriptionChange(description) {
    if (description === '') {
      let newError = { startupDescription: 'You must fill out a description.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupDescription
      this.setState({ errors: errorState })
      return true
    }
  }

  validateDesiredFundingChange(desired) {
    if (desired === '') {
      let newError = { startupDesiredFunding: 'You must enter a desired funding amount.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupDesiredFunding
      this.setState({ errors: errorState })
      return true
    }
  }
  validateCurrentFundingChange(current) {
    if (current === '') {
      let newError = { startupCurrentFunding: 'You must enter a current funding amount.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupCurrentFunding
      this.setState({ errors: errorState })
      return true
    }
  }
  validateSharesAvailableChange(shares) {
    if (shares === '') {
      let newError = { startupSharesAvailable: 'You must enter total shares available.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupSharesAvailable
      this.setState({ errors: errorState })
      return true
    }
  }
  validatePhotoUrlChange(photo) {
    if (photo === '') {
      let newError = { startupPhotoUrl: 'You must enter a photo url.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupPhotoUrl
      this.setState({ errors: errorState })
      return true
    }
  }
  validateStartDate(start) {
    if (start === '') {
      let newError = { startupStartDate: 'You must enter a start date.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupStartDate
      this.setState({ errors: errorState })
      return true
    }
  }
  validateEndDate(end) {
    if (end === '') {
      let newError = { startupEndDate: 'You must enter a end date.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.startupEndDate
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <form className="callout" onSubmit={this.handleSubmit}>
        {errorDiv}
        <StartupTextInputField
          label='Name'
          value={this.state.startupName}
          name='startupName'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='Category'
          value={this.state.startupCategory}
          name='startupCategory'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='Description'
          value={this.state.startupDescription}
          name='startupDescription'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='Desired Funding'
          value={this.state.startupDesiredFunding}
          name='startupDesiredFunding'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='Current Funding'
          value={this.state.startupCurrentFunding}
          name='startupCurrentFunding'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='Available Shares'
          value={this.state.startupSharesAvailable}
          name='startupSharesAvailable'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='Photo URL'
          value={this.state.startupPhotoUrl}
          name='startupPhotoUrl'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='Start Date'
          value={this.state.startupStartDate}
          name='startupStartDate'
          handleChange={this.handleChange}
        />
        <StartupTextInputField
          label='End Date'
          value={this.state.startupEndDate}
          name='startupEndDate'
          handleChange={this.handleChange}
        />
        <input className="form-button" type='submit' value='Submit'/>
      </form>
    )
  }
}

export default StartupFormContainer
