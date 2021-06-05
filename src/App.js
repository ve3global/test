import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  state = {
    advices: '',
    // loading : true
  }
  componentDidMount() {
    this.fetchAdvice()

  }
  fetchAdvice = () => {

    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip
        console.log(advice)
        this.setState({
          //  loading : false,
          advices: advice
        })
        // console.log(res.data.slip.advice);
      })
      .catch((err) => {
        console.log("Error", err)
      })
  }
  render() {
    const mystyle = {
      width: ' 50%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    }
    const AppStyle = {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }
    const { advices } = this.state
    return (
      <div className="App" style={AppStyle} >
        <div style={mystyle} >
          <div style={{ padding: '20px', textAlign: "center" }} >
            <p>{advices}</p>
            {/* <p {...this.state.loading ? true : '<p>loading<p/>' }></p> */}
          </div>
          <div>
            <button onClick={this.fetchAdvice} style={{ marginBottom: '20px' }}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}


