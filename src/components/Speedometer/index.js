// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="head">SPEEDOMETER</h1>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />

          <h1 className="heading">Speed is {count}mph</h1>
          <p className="pera">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button className="button1" onClick={this.onIncrement} alt="load">
              Accelerate
            </button>

            <button className="button2" onClick={this.onDecrement} alt="load">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
