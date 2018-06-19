import React, { Component } from 'react';
import Header from './components/Header.js'
import Input from './components/Input.js'

class App extends Component {
  constructor(args){
    super(args)

    this.state = {
      userMessage: "This needs to be updated when user clicks the 'Enter' button in <Input/>"
    }
  }

  _updateUserMessage(data){
    console.log('from <App/>:')
    console.log(data, this.state)
    this.setState({
      userMessage: data
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Input
          _updateUserMessageCb={this._updateUserMessage.bind(this)}
        />
        <hr/>
        <h4>Output</h4>
        <p className="user-message">
           {this.state.userMessage}
        </p>
      </div>
    );
  }
}





export default App;
