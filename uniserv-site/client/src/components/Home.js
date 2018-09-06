import React, { Fragment } from 'react'
import styled from 'styled-components'

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
              marginBottom: '20px',
              background: 'white',
              color: 'black',
            }}> 
            <h2>Home Page Stuff</h2>  
          </div>
      </Fragment>
    )
  }
}

export default Home