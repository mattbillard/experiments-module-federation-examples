import * as React from 'react';
import { BrowserRouter, Link, Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import LocalButton from '../button/button';

const App = () => {
  // prettier-ignore
  return (
    <div>
      <h2>App 1</h2>
      <LocalButton />
      <br />
      <br />
  
      <BrowserRouter>
        <div>
          <Link to="/site/example-team1/app1/nested-page1">Nested Page 1</Link> |
          <Link to="/site/example-team1/app1/nested-page2">Nested Page 2</Link>
        </div>
  
        <div className="box">
          <Switch>
            <Route path="/site/example-team1/app1/nested-page1">Nested Page 1</Route>
            <Route path="/site/example-team1/app1/nested-page2">Nested Page 2</Route>
            <Redirect to="/site/example-team1/app1/nested-page1" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
