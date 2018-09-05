import React, { Fragment } from 'react'
import Footer from './Footer'

class Wea extends React.Component{
  render() {
    return(
      <Fragment>
        <h1 style={{ textAlign: 'center' }}>WEA Staff</h1>
        <div 
          class="container" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center',
            border: 'solid 1px black', 
            height: '900px', 
            marginBottom: '20px',
            background: 'white', 
          }} >
          <h2>WEA Stuff</h2>  
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Wea