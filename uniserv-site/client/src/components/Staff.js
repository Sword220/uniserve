import React, { Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Staff extends React.Component {
  state = { staff: [] }

  componentDidMount() {
    axios.get('/api/staffs')
      .then( res => {
        this.setState({ staff: res.data })
      } 
      )
  }

  render() {
    const { staff } = this.state

    return(
      <div>
        <div style={{ textAlign: 'center' }}>Staff</div>
          <div>
            { staff.map( s => 
              <div key={s.id} >
                <ul>
                  <li>{s.image}</li>
                  <li>{s.name}</li>
                  <li>{s.email}</li>
                </ul>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Staff