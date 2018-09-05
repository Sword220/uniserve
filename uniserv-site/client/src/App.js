import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Staff from './components/Staff'
import Oea from './components/Oea'
import Wea from './components/Wea'
import PubAction from './components/PubAction'
import MemberBen from './components/MemberBen'
import Background from './images/Background.jpg'

const BackgroundImage = styled.div`
  background-size: cover;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  color: white !important;
`

class App extends React.Component {
  
  render()  {
    return(
      <BackgroundImage>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/staff' component={Staff} />
          <Route exact path='/oea' component={Oea} />
          <Route exact path='/wea' component={Wea} />
          <Route exact path='/pubaction' component={PubAction} />
          <Route exact path='/memberben' component={MemberBen} />
        </Switch>
      </BackgroundImage>
    )
  }
}

export default App;
