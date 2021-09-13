import * as _ from 'lodash';
import * as React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  RouteProps,
} from "react-router-dom";
import LocalButton from "../button/button";

const defaultDefitions = require("./micro-app-definitions.json");

// TODO: fix types
const RemoteButton1 = React.lazy(() => import("app1/button"));
const RemoteButton2 = React.lazy(() => import("app2/button"));

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [definitions, setDefinitions] = useState(defaultDefitions);

  useEffect(() => {
    (async () => {
      // Allow overwrite of defaultDefitions with local definitions
      try {
        const res = await fetch('/public/test.json');
        const data = await res.json();
        const newDefinitions = _.merge({}, defaultDefitions, data);
        setDefinitions(newDefinitions);
      } catch (error) {
        // noop
      }

      setIsLoading(false);
    })();
  });

  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <div>
        <h1>module-federation-ts-with-router</h1>
        <h2>Site</h2>

        <LocalButton />
        <br />
        <br />

        <div>
          <Link to={definitions.nav.App1}>App1</Link> |
          <Link to={definitions.nav.App2}>App2</Link>
        </div>

        <React.Suspense fallback="Loading...">
          <Switch>
            <Route
              path={definitions.nav.App1}
              render={(routeProps: RouteProps) => <RemoteButton1 />}
            />
            <Route
              path={definitions.nav.App2}
              render={(routeProps: RouteProps) => <RemoteButton2 />}
            />
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
