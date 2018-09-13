import React, { Fragment } from 'react'
import axios from 'axios'
import '../styles/contact.css'
class Contact extends React.Component {
  state = { name: '', email: '', message: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })  
  }

  render() {
    const { name, email, message } = this.state

    return(
      <div id="form_container">
        <form id="form_style">
          <label id="label_style" for="name">Name</label>
          <input 
            required
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label id="label_style" for="email">Email</label>
          <input
            required
            name="email"
            value={email}
            onChange={this.handleChange}
          />
            <label id="label_style" for="textarea1">Textarea</label>
            <textarea 
              id="textarea1" 
              class="materialize-textarea"
              required
              name="message"
              value={message}
              onChange={this.handleChange}
            >
            </textarea>
        </form>
      </div>
    )
  }
}

export default Contact
