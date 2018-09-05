import React from 'react'

class Footer extends React.Component {

  render() {
    return(
      <footer style={{ background: '#2d557c' }}class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Ogden Weber Uniserv</h5>
                <h6 class="grey-text text-lighten-4">939 25th St.</h6>
                <h6 class="grey-text text-lighten-4">Ogden, UT 84401</h6>
                <p class="grey-text text-lighten-4">Phone: 801-399-3746</p>
                <p class="grey-text text-lighten-4">Fax: 801-393-0465</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">facebook</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">uea link</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">contact us</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">some other link</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer