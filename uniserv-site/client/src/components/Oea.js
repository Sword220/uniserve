import React, { Fragment } from 'react'

class Oea extends React.Component{
  render() {
    return(
      <Fragment>
        <h1 style={{ textAlign: 'center' }}>OEA Staff</h1>
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
          <h2>OEA Stuff</h2>  
        </div>
      </Fragment>
    )
  }
}

export default Oea