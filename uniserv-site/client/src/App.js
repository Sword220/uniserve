import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Uniserv from './components/Uniserv'
import Oea from './components/Oea'
import Wea from './components/Wea'
import PolAction from './components/PolAction'
import MemberBen from './components/MemberBen'
import Events from './components/Events'
import Background from './images/Background.jpg'

const BackgroundImage = styled.div`
  background-size: cover;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  font-family: trebuchet;
  color: white !important;
`

class App extends React.Component {
  
  render()  {
    return(
      <BackgroundImage>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/uniserv' component={Uniserv} />
          <Route exact path='/oea' component={Oea} />
          <Route exact path='/wea' component={Wea} />
          <Route exact path='/polaction' component={PolAction} />
          <Route exact path='/memberben' component={MemberBen} />
          <Route exact path='/events' component={Events} />
        </Switch>
        <Footer />
      </BackgroundImage>
    )
  }
}

export default App;
