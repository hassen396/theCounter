// import { Component } from 'react'
import PropTypes from 'prop-types'
const NavBar = ({counters}) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <h2> 
        {counters.filter(c => c.value > 0).length}
      </h2>
    </nav>
  );
};
//validation
 NavBar.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired
};
export default NavBar
