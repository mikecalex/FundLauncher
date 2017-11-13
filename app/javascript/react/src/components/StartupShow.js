import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import RequireScript from 'scriptjs';

class StartupShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      numShares: '',
      investments: []
    }
    this.showPayDialog = this.showPayDialog.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.calculateAmount = this.calculateAmount.bind(this)
    this.handleToken = this.handleToken.bind(this)
  }

  calculateAmount() {
    let a = parseInt(this.state.numShares)
    let b = parseInt(this.props.sharePriceCalc)
    let totalCost = a * b
    let finalCost = totalCost * 100
    return finalCost
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  showPayDialog(e) {
    if(this.handler){
      this.handler.open({
        name: this.props.name,
        amount: this.calculateAmount(),
        description: 'Shares'
      })
    }
  }

  handleToken(token){
    fetch("/api/v1/investments", {
      method: 'POST',
      body: JSON.stringify({
        token: token,
        startup_id: this.props.startupId
      }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => {return response.json()
    })
    .then(json => {
      let newInvestmentsArray = this.state.investments.concat(json.investment)
      this.setState({ investments: newInvestmentsArray })
    })
  }

  componentDidMount() {
    RequireScript.get('https://checkout.stripe.com/checkout.js', () => {
      this.handler = StripeCheckout.configure({
        key: 'pk_test_QsMG8damJeqqksFgx4bcrasV',
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        bitcoin: true,
        token: this.handleToken
      })
    });
  }

  render() {
    return(
      <div className="show-row">

        <div className="company-title">
          <h1>{this.props.name}</h1>
        </div>
        <div className="small-12 medium-8 large-8 columns" id="showpicture">
          <p><img className="show" width="460px" height="320px" src={this.props.photo}/></p>
        </div>

        <div className="small-12 medium-4 large-4 columns" id="side-nav">
          <ul className="side-nav">
            <p className="details">Category: {this.props.category}</p>
            <p className="details">Campaign Start Date: {this.props.start} </p>
            <p className="details">Campaign End Date: {this.props.end} </p>
            <p className="details">Desired Funding: {this.props.desired}</p>
            <p className="details">Current Investments: {this.props.current}</p>
            <p className="details">Total Shares Available: {this.props.total}</p>
            <p className="details">Share Price: {this.props.sharePrice} </p>

            <input
              className="show-input"
              placeholder="Number of Shares"
              type='number'
              value={this.state.numShares}
              name="numShares"
              onChange={this.handleChange}
            />

            <button className="invest-button" type="button" onClick={this.showPayDialog}> Invest </button>

            <div>
              <Link className="back-button" to='/'>Back</Link>
              { this.props.children }
            </div>
          </ul>
        </div>

        <div className="small-12 medium-12 large-12 columns">
          <div className="about">
            <h4>About</h4>
          </div>
          <div className="show-desc">
            <p>{this.props.description}</p>
          </div>
          <div className="show-sec-pic">
            <img className="sec-pic-show" src={this.props.secPic} />
          </div>
        </div>

      </div>
    )
  }
}

export default StartupShow;
