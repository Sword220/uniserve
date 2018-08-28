import React, { Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Staff extends React.Component {
  state = { staff: [], name: '', title: '', email: '', phone: '' }

  componentDidMount() {
    axios.get('/api/staffs')
      .then( res => {
        this.setState({ staff: res.data })
      } 
      )
  }

  render() {
    return(
      <div>Staff</div>
    )
  }
}

export default Staff