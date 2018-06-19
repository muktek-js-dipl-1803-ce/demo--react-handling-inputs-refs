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

  _handleEnterClick(){
    // console.log('Captured Message:')
    // console.log(this.refs.msgInput.value)
    this.props._updateUserMessageCb(this.refs.msgInput.value)
    this.refs.msgInput.value = ''
    this.setState({
      currentValInInput: ''
    })
  }

  render() {
    return (
      <div className="input-group">
        <input type="text"
          ref="msgInput"
          onChange={ ()=>{ this._handleInputType() } }
        />
        <span className="char-count">
          {this.state.currentValInInput.length}
        </span>

        <br/>
        <button
          className="enter-text"
          onClick={ ()=>{ this._handleEnterClick() } }
        >Enter</button>
      </div>
    );
  }
}

export default Input;
