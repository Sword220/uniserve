import React, { Fragment } from 'react'
import axios from 'axios'

class Contact extends React.Component {
  state = { name: '', email: '', message: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })  
  }

  render() {
    const { name, email, message } = this.state

    return(
      <div 
        style={{   
          background: 'white', 
          height: '500px',
          width: '800px',
          display: 'flex',
          alignItems: 'center',
        }}>
        <div class="row">
          <form style={{ width: '800px', textColor: 'black' }}>
            <div class="row">
              <div class="input-field col s12">
                <input 
                  type="text" 
                  class="validate" 
                  name="name"
                  value={name} 
                  onChange={this.handleChange} 
                />
                <label 
                  style={{ color: 'black'}} 
                  class="active" 
                  for="name"
                >
                  First and Last Name
                </label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input 
                  type="email" 
                  class="validate" 
                  name="email"
                  value={email}
                  onChange={this.handleChange} 
                />
                <label 
                  style={{ color: 'black' }}
                  class="active" 
                  for="email"
                >
                  Email
                </label>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <textarea 
                    class="materialize-textarea"
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                  >
                  </textarea>
                  <label
                    style={{ color: 'black' }} 
                    class="active" 
                    for="textarea1"
                  >
                    Textarea
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
