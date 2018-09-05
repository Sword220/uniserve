import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Staff from './components/Staff'

const BackgroundImage = styled.div`
  background-size: auto;
  background: lightblue;
  background-repeat: no-repeat;
  background-position: center;
`

class App extends React.Component {
  
  render()  {
    return(
      <BackgroundImage>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/staff' component={Staff} />
        </Switch>
      </BackgroundImage>
    )
  }
}

export default App;
