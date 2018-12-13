import React, { Component } from 'react';




class ToDo extends Component {
  render() {
    return (
        <div className='App'>
      <li>A todo will go here </li>
      <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } onClick={ () => this.props.onDelete(this.props.description)} />
         <span>{ this.props.description }</span>
         <button onClick={ () => this.props.onDelete(this.props.description)}>Delete</button>
       </li>
    </div>
    );
  }
}

export default ToDo;