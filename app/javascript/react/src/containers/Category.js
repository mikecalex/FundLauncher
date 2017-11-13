import React, { Component } from 'react'

class Category extends Component {
  constructor(props) {
    super(props);
  }

render() {
    return(
      <label>
        <select name={this.props.name} value={this.props.value} onChange={this.props.handleChange} className="form-select-desc">
          <option value="">Category</option>
          <option value="Tech">Tech</option>
          <option value="Electronic">Electronic</option>
          <option value="Politics">Politics</option>
          <option value="Games">Games</option>
          <option value="Social">Social</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Finance">Finance</option>
          <option value="Music">Music</option>
        </select>
      </label>
    );
  }
}

export default Category
