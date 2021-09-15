import * as React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  RouteProps,
} from "react-router-dom";
import LocalButton from "../button/button";

const App = () => (
  <div>
    <h1>module-federation-ts-with-router</h1>
    <h2>App 1</h2>
    <LocalButton />

    <BrowserRouter>
      <div>
        <Link to="/site/app1app/test1">Test 1</Link> | 
        <Link to="/site/app1app/test2">Test 2</Link> | 
      </div>

      <Switch>
        <Route path="/site/app1app/test1">Test 1</Route>
        <Route path="/site/app1app/test2">Test 2</Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
