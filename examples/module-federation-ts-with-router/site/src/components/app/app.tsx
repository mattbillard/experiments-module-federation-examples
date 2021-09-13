import * as React from "react";
import { BrowserRouter, Link, Route, Switch, RouteProps } from "react-router-dom";
import LocalButton from "../button/button";

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
        <Link to="/site/app1">App1</Link> | 
        <Link to="/site/app2">App2</Link>
      </div>

      <React.Suspense fallback="Loading...">
        <Switch>
          <Route path="/site/app1" render={(routeProps: RouteProps) => <RemoteButton1 />} />
          <Route path="/site/app2" render={(routeProps: RouteProps) => <RemoteButton2 />} />
        </Switch>
      </React.Suspense>
    </div>
  </BrowserRouter>
);

export default App;
