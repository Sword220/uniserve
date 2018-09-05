import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  oeaDropdown = () => {

  }

  weaDropdown = () => {

  }

  render() {
    return(
      <Fragment>
        <nav style={{ background: '#2d557c' }} class="nav-extended">
          <div class="nav-wrapper">
            <span class="brand-logo">Logo</span>
            <ul class="right">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/staff">
                  Uniserve
                </Link>
              </li>
              <li onHover={this.oeaDropdown()}>
                <Link to="/oea">
                  OEA
                </Link>
              </li>
              <li>
                <Link to="/wea">
                  WEA
                </Link>
              </li>
              <li>
                <Link to='/pubaction'>
                  Public Action
                </Link>
              </li>
            </ul>
          </div>
          <div class="nav-wrapper">
            <span 
              class="nav-title"
              style={{
                fontSize: '40px',
                fontWeight: 'extra-bold',
              }}>
              Uniserve
            </span>
            <ul class="right">
              <li>
                <Link to="/memberben">
                  Member Benefits
                </Link>
              </li>
              <li>
                <Link to="/events">
                  Training and Events
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default NavBar