import React from 'react';
import { HashRouter, Switch, Redirect, Route, } from "react-router-dom";
import routes from './routes';
import { BottomNavigation } from './components/BottomNavigation'

class App extends React.Component {
  render() {
    const links = routes.map(item => {
      return {
        to: item.path as string,
        label: item.label as string,
        icon: item.icon as string
      }
    });
    return (
      <HashRouter>
        <div className="main">
          <Switch >
            {routes.map(route => (
              <Route {...route} key={route.label}></Route>
            ))}
            <Redirect to={links[0].to}></Redirect>
          </Switch>
        </div>

        <BottomNavigation links={links} />
      </HashRouter>
    )
  }
}

export default App
