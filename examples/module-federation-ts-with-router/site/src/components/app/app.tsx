import * as React from "react";
import { BrowserRouter, Link, Route, Switch, RouteProps } from "react-router-dom";
import LocalButton from "../button/button";

// @ts-ignore
const definitions = require('./micro-app-definitions.json');

// TODO: fix types
const RemoteButton1 = React.lazy(() => import("app1/button"));
const RemoteButton2 = React.lazy(() => import("app2/button"));

const App = () => (
  <BrowserRouter>
    <div>
      <h1>module-federation-ts-with-router</h1>
      <h2>Site</h2>
      
      <LocalButton /> 
      <br /><br />

      <div>
        <Link to={definitions.nav.App1}>App1</Link> | 
        <Link to={definitions.nav.App2}>App2</Link>
      </div>

      <React.Suspense fallback="Loading...">
        <Switch>
          <Route path={definitions.nav.App1} render={(routeProps: RouteProps) => <RemoteButton1 />} />
          <Route path={definitions.nav.App2} render={(routeProps: RouteProps) => <RemoteButton2 />} />
        </Switch>
      </React.Suspense>
    </div>
  </BrowserRouter>
);

export default App;
