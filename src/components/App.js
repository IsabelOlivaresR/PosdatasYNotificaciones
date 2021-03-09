import React from 'react';
import Letter from './Letters/Letter-1';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import Whatsapp from './Whatsapps/Whatsapp-1';

class App extends React.Component {
  
  

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/whatsapp'>
            <Whatsapp />
          </Route>
          <Route exact path='/letter'>
            <Letter />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
