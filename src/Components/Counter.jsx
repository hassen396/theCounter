// 'use strict';

import { Component } from 'react'
import PropTypes from 'prop-types' // Importing PropTypes

class Counter extends Component {
  style = {
    width: '50px',
    fontSize: '15px', // Add more styles to see the effect
    padding: '10px', // Adjust to see better effect
    textAlign: 'center' // Center text
  }

  render () {
    // console.log(this.props);
    let classes = 'badge  bg-'
    classes += this.props.counter.value > 0 ? 'primary' : 'warning'
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'left', // Centers horizontally
          alignItems: 'center'
        }}
      >
        
        <span style={this.style} className={classes}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}  // Incrementing the counter value when the + button is clicked. 
        className='btn btn-primary m-2' >
          +
        </button>
        <button 
        onClick={() => this.props.onDecreament(this.props.counter)}
        className='btn btn-primary' >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}  
          className='btn btn-danger m-3'
        >
          Delete
        </button>
      </div>
    )
  }
}
//validation
Counter.propTypes = {
  counter: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  }),
  onIncreament: PropTypes.func.isRequired,
  onDecreament: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Counter
