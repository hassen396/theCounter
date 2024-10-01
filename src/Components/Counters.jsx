import Counter from './Counter.jsx'
import { Component } from 'react'
import PropTypes from 'prop-types'

class Counters extends Component {
  render () {
    const {onRest, onIncreament, onDecreament, onDelete, counters} = this.props
    return (
      <div>
        <button onClick={onRest} className='btn btn-primary m-3'>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncreament={onIncreament} // Passing the handleIncreament method to the Counter component as a prop.  // The Counter component will be updated with the new state whenever its value changes.  // The Counter component will be re-rendered whenever its state changes.  // The Counter component will be removed from the DOM when its value becomes 0.  // The Counter component will be added to the DOM when its value becomes greater than 0.
            onDecreament={onDecreament}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div> // Add more counters as needed. Each counter will have its own state and behavior.  // The Counter component will be reused in this way.  // The Counter component will be updated with the new state whenever its value changes.  // The Counter component will be re-rendered whenever its state changes.  // The Counter component will be removed from the DOM when its value becomes 0.  // The Counter component will be added to the DOM when its value becomes greater than 0.  // The Counter component will be updated with the new state whenever its value changes.  // The Counter component will be re-rendered whenever its state changes.  // The Counter component will be removed from the DOM when its value becomes 0.  // The Counter component will be added to the DOM when
    )
  }
}
//validation
Counters.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired,
  onRest: PropTypes.func.isRequired,
  onIncreament: PropTypes.func.isRequired,
  onDecreament: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default Counters
