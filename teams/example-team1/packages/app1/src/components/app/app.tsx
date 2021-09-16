import * as React from 'react';
import { BrowserRouter, Link, Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import { ButtonApp1 } from '../button/button';

export const App1 = () => {
  // prettier-ignore
  return (
    <BrowserRouter>
      <h2>App 1</h2>
      {/* 
      <ButtonApp1 />
      <br />
      <br />
      */}
  
        <div className="navigation">
          <Link to="/site/example-team1/app1/nested-page1">Nested Page 1</Link>
          <Link to="/site/example-team1/app1/nested-page2">Nested Page 2</Link>
        </div>
  
        <div className="box">
          <Switch>
            <Route path="/site/example-team1/app1/nested-page1"><h3>Nested Page 1</h3></Route>
            <Route path="/site/example-team1/app1/nested-page2"><h3>Nested Page 2</h3></Route>
            <Redirect to="/site/example-team1/app1/nested-page1" />
          </Switch>
        </div>
    </BrowserRouter>
  )
};

export default App1;
