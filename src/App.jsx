import { Component } from 'react'
import Counters from './Components/Counters.jsx'
import NavBar from './Components/NaveBar.jsx'

class App extends Component {


    state = {
        counters: [
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 },
          { id: 5, value: 0 }
        ]
      }
    
      handleReset = () => {
        const counters = this.state.counters.map(counter => ({
          ...counter,
          value: 0
        }))
        this.setState({ counters }) // Update the state with the new array.  // The Counter component will be updated with the new state whenever its value changes.  // The Counter component will be re-rendered whenever its state changes.  // The Counter component will be removed from the DOM when its value becomes 0.  // The Counter component
      }
    
      deleteHandler = counterId => {
        const counters = this.state.counters.filter(
          counter => counter.id !== counterId
        )
        this.setState({ counters }) // Update the state with the new filtered array.  // The Counter component will be updated with the new state whenever its value changes.  // The Counter component will be re-rendered whenever its state changes.  // The Counter component will be removed from the DOM when its value becomes 0.  // The Counter component will be added to the DOM when its value becomes greater than 0.  // The Counter component will be updated with the new
      }
    
      handleIncreament = counter => {
        // console.log("the increment is being triggered", counter);
        // Create a copy of the counters array
        const counters = [...this.state.counters]
    
        // Find the index of the specific counter in the array
        const index = counters.indexOf(counter)
    
        // Make a copy of the counter object to avoid directly mutating state
        counters[index] = { ...counter }
    
        // Increment the value of the specific counter
        counters[index].value += 1
    
        // Update the state with the new counters array
        this.setState({ counters })
      }
      handleDecreament = counter => {
        if (counter.value > 0) {
          // Create a copy of the counters array
          const counters = [...this.state.counters]
    
          // Find the index of the specific counter in the array
          const index = counters.indexOf(counter)
    
          // Make a copy of the counter object to avoid directly mutating state
          counters[index] = { ...counter }
    
          // Decrement the value of the specific counter
          counters[index].value -= 1
    
          // Update the state with the new counters array
          this.setState({ counters })
        }
      }
    
  render () {
    
    return (
      <>
        <div className="container">
        <NavBar 
        counters={this.state.counters}
        />
        <Counters 
        onRest={this.handleReset}
        onIncreament={this.handleIncreament} // Passing the handleIncreament method to the Counter component as a prop.  // The Counter component will be updated with the new state whenever its value changes.  // The Counter component will be re-rendered whenever its state changes.  // The Counter component will be removed from the DOM when its value becomes 0.  // The Counter component will be added to the DOM when its value becomes greater than 0.
            onDecreament={this.handleDecreament}
            onDelete={this.deleteHandler}
            counters={this.state.counters}
        />
        </div>
      </>
    )
  }
}

export default App
