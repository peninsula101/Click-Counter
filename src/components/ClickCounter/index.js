// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log('count clicked')
    this.setState(prevState => {
      console.log(`previous state count is ${prevState.count}`)
      console.log(prevState.count)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="head">
          The Button has been clicked
          <br />
          <span className="count">{count} </span>
          times
        </h1>
        <p className="info">Click the button to increase the count!</p>
        <div className="button-container">
          <button className="btn" type="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
