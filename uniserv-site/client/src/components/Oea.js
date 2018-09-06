import React, { Fragment } from 'react'
import axios from 'axios'

class Oea extends React.Component{
  state = { staff: [] }

  componentDidMount() {
    axios.get('/api/oeas')
      .then( res => {
        this.setState({ staff: res.data })
      })
  }
  
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