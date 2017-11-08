import React, { Component } from 'react'
// import CategorySelect from '../components/CategorySelect'


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {startupCategory: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    debugger
    this.setState({startupCategory: event.target.value});

  }
render() {
    return(
      <label>
        <select value={this.state.value} onChange={this.props.handleChange}>

          <option value="Electronic">Electronic</option>
          <option value="Politics">Politics</option>
          <option value="Games">Games</option>
          <option value="Social">Social</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Finance">Finance</option>
          <option value="Music">Music</option>
          <option value="Other">Other</option>
        </select>
      </label>
    );
  }
}

export default Category
