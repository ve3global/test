import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
export default class App extends Component {
  state = {
    advices: '',
    loading : true
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
           loading : false,
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
      height: '30vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    
    }
    const AppStyle = {
      
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      
    }
    const { advices } = this.state
    return (
      <div className=" myApp" style={AppStyle}  >
        <div className="advice-container" style={mystyle} >
          <div  style={{ padding: ' 0 20px  0 20px', textAlign: "center" }} >
            {/* <p >{advices}</p> */}
            <p>{this.state.loading ? <h2>Loading... </h2>: advices} </p>
          </div>
        </div>
            <button className="btn" onClick={this.fetchAdvice} >Next</button>
      </div>
    );
  }
}


