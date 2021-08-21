// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerate = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: RandomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <h1 className="count">{count}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
