import React, { Fragment } from 'react'

class PolAction extends React.Component{
  render() {
    return(
      <Fragment>
        <h1 style={{ textAlign: 'center' }}>Public Action</h1>
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
          <h2>Educators on the Hill</h2>  
        </div>
      </Fragment>
    )
  }
}

export default PolAction