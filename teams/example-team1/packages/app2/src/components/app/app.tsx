import * as React from 'react';
import { BrowserRouter, Link, Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import { ButtonApp2 } from '../button/button';

export const App2 = () => {
  // prettier-ignore
  return (
    <BrowserRouter>
      <h2>App 2</h2>

      <div className="navigation">
        <Link to="/site/example-team1/app2/nested-page3">Nested Page 3</Link>
        <Link to="/site/example-team1/app2/nested-page4">Nested Page 4</Link>
      </div>

      <div className="box">
        <Switch>
          <Route path="/site/example-team1/app2/nested-page3">
            <h3>Nested Page 3</h3>
            <ButtonApp2 />
          </Route>
          <Route path="/site/example-team1/app2/nested-page4">
            <h3>Nested Page 4</h3>
            <ButtonApp2 />
          </Route>
          <Redirect to="/site/example-team1/app2/nested-page3" />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App2;
