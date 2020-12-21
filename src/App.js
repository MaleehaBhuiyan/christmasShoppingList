import React from 'react'
import StartPage from './Page/StartPage'
import HomePage from './Page/HomePage'
import './App.css';

class App extends React.Component{
  state = {
    showPage: true,
    name: '',
    budget: ''
  }

  startPageSubmitHandler = (obj) => {
    this.setState({
      name: obj.name,
      budget: obj.budget,
      showPage: false 
    })
  }

  render(){
    
    return(
      <>
      {
        this.state.showPage ? 
        <StartPage submitHandler={this.startPageSubmitHandler} /> :
        <HomePage budget={this.state.budget} userName={this.state.name} />
      }
      </>

    )
  }
}


export default App;
