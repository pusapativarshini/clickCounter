/* eslint-disable react/no-unknown-property */
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrment = () => {
    this.setState(prevstate => ({count: prevstate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          This Button has been clicked <span className="span1">{count} </span>
          times
        </h1>
        <p>Click the button to increase the count </p>
        <button className="btn" type="button" onclick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
