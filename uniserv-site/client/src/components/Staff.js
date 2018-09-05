import React, { Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Footer from './Footer'

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
      <Fragment>
        <div>
          <h1 style={{ textAlign: 'center' }}>Staff</h1>
            <div>
              <div class="row">
                { staff.map( s => 
                  <div key={s.id} class="card">
                    <div class="container">
                      <div class="col m4">
                        <div class="card blue-grey">
                          <div class="card-content white-text center">
                              <img class="responsive-image" alt="" src={s.image} />
                            <p>{s.name}</p>
                            <p>{s.title}</p>
                            <p>{s.phone}</p>
                            <p>{s.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>
      <Footer />
      </Fragment>
    )
  }
}

export default Staff