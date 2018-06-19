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

  /* (Input Refs - 4a) create a method to change state of parent   */

  _updateStateFromChild(stateObj){
    console.log('from <App/>:')
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Input
        /* (Input Refs - 4b)
            pass _updatemethod as props-function to child <Input/>
            ... don't forget to bind!
        */
          updateAppState={this._updateStateFromChild.bind(this)}
        />
        <hr/>
        <h4>Output</h4>
        <p className="user-message">
          /* (Input Refs - 5)
              parent state is updated from child component,
              and new message appears
          */
           {this.state.userMessage}
        </p>

      </div>
    );
  }
}





export default App;
