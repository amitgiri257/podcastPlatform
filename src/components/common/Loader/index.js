import React from 'react'
import './styles.css';
const Loader = () => {
  return (
    <div className='wrapper'>
    <div class="lds-ripple">
    <div></div>
    <div></div>
    </div>
    </div>
  )
}

export default Loader;