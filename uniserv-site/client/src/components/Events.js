import React, { Fragment } from 'react'
import Footer from './Footer'

class Events extends React.Component{
  render() {
    return(
      <Fragment>
        <h1 style={{ textAlign: 'center' }}>Training and Events</h1>
        <div 
          class="container" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center',
            border: 'solid 1px black', 
            height: '900px', 
            marginBottom: '20px',
            background: 'white',
            color: 'black', 
          }} >
          <h2>Training Events and Things</h2>  
        </div>
      </Fragment>
    )
  }
}

export default Events