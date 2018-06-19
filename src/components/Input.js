import React, { Component } from 'react';

class Input extends Component {
  constructor(args){
    super(args)
    this.state = {
      currentValInInput : ''
    }
  }

  _handleInputType(){
    // NO NO BAD
    //   document.querySelector('.input-group input')

    // Use a this.refs.«ref-name-value»
    const txtInputDomEl = this.refs.msgInput

    this.setState({
      currentValInInput : txtInputDomEl.value
    })

  }

  /* (Input Refs - 3) Create listener Method   */
  _handleEnterClick(appState){

    /* (Input Refs - 4c)
        send state-object to parent component (see 4a, 4b in App.js)
        by executing the _updateStateFromChild() callback function
        -- (note: lives on this.props.updateAppState)
    */
    this.props.updateAppState({
      userMessage: this.refs.msgInput.value
    })

    this.refs.msgInput.value = ''
    this.setState({
      currentValInInput: ''
    })
  }

  _handleReturnKey(evtObj){
    if(evtObj.keyCode === 13){
      this._handleEnterClick()
    }
  }

  render() {
    return (
      <div className="input-group">
        <input type="text"
        /* (Input Refs - 1) Create ref on <input/> el */
          ref="msgInput"
          onChange={ ()=>{ this._handleInputType() } }
          onKeyDown={ (evt)=>{this._handleReturnKey(evt) } }
        />
        <span className="char-count">
          {this.state.currentValInInput.length}
        </span>

        <br/>
        <button
          className="enter-text"
          /* (Input Refs - 2) Create listener and execute listener method
                 inside anonymous arrow function */
          onClick={ ()=>{ this._handleEnterClick() } }
        >Enter</button>
      </div>
    );
  }
}

export default Input;
