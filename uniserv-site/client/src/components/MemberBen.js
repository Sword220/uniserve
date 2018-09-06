import React, { Fragment } from 'react'

class MemberBen extends React.Component{
  render() {
    return(
      <Fragment>
        <h1 style={{ textAlign: 'center' }}>Member Benefits</h1>
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
          <h2>All the good stuff about membership</h2>  
        </div>
      </Fragment>
    )
  }
}

export default MemberBen