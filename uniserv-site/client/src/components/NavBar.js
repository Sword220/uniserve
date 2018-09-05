import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return(
      <Fragment>
        <nav>
          <div class="nav-wrapper">
            <a class="brand-logo">Logo</a>
            <ul class="right">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/staff">
                  Staff
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