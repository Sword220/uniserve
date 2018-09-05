import React, { Fragment } from 'react'
import Footer from './Footer'

class Home extends React.Component{
  render() {
    return(
      <Fragment>
      <h1 style={{ textAlign: 'center' }}>Home Component</h1>
      <div 
        class="container" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          border: 'solid 1px black', 
          height: '900px', 
          marginBottom: '20px' 
        }} >
        <h2>Home Page Stuff</h2>  
      </div>
      <Footer />
      </Fragment>
    )
  }
}

export default Home