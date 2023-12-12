import { Component } from 'react'
import "./App.css"

export default class App extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
      count:0
    }
  }

  increaseCount = () => {
    this.setState({count:this.state.count + 1})
  }

  DecreaseCount = () => {
    this.setState({count:this.state.count - 1})
  }

  Reset = () => {
    this.setState({count: 0})
  }



  render() {

    return (
      <>
        <h1 id='title'>Counter App</h1>
        <div className="card">
          <h1 id='count'>{this.state.count}</h1>
          <div>
          <button className='btn' onClick={this.increaseCount}>
            + 1
          </button>
          <button className='btn' onClick={this.DecreaseCount}>
            - 1
          </button>
          <button className='btn' onClick={this.Reset}>
            Reset
          </button>
          </div>
        </div>
        
      </>
    )
  }
}
