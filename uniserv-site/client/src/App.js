import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Staff from './components/Staff'

class App extends React.Component {
  
  render()  {
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/staff' component={Staff} />
      </Switch>
    )
  }
}

export default App;
