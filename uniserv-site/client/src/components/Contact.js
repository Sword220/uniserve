import React, { Fragment } from 'react'
import axios from 'axios'

class Contact extends React.Component {
  render() {
    return(
      <div style={{ background: 'white' }}>
      <div class="row">
    <form class="col s12" style={{ textColor: 'black' }}>
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="first name" id="first_name" type="text" class="validate" />
          <label style={{ color: 'black'}} class="active" for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input placeholder="last name" id="last_name" type="text" class="validate" />
          <label class="active" for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="email" id="email" type="email" class="validate" />
          <label class="active" for="email">Email</label>
        </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="###-####" id="phone" type="text" class="validate" />
          <label class="active" for="phone">Phone Number</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea placeholder="message goes here" id="textarea1" class="materialize-textarea"></textarea>
          <label class="active" for="textarea1">Textarea</label>
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
