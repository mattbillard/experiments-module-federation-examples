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

const teamDefinitions = require("./team-definitions.json");

// TODO: fix types
const RemoteButton1 = React.lazy(() => import("app1/button"));
const RemoteButton2 = React.lazy(() => import("app2/button"));

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [definitions, setDefinitions] = useState<any>({ nav: []});

  useEffect(() => {
    // Allow overwrite of defaultDefitions with local definitions
    teamDefinitions.teams.forEach((teamDefinition: any) => {
      const { teamId, teamDefinitionUrl } = teamDefinition;

      try {
        const res = fetch(teamDefinitionUrl).then(res => {
          return res.json();
        }).then(data => {
          const newDefinitions = {
            nav: [
              ...definitions.nav,
              ...data.nav
            ]
          };
          setDefinitions(newDefinitions);

          setIsLoading(false); // TODO: use Promise.all() instead
        })
      } catch (error) {
        // noop
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <div>
        <h1>module-federation-ts-with-router</h1>
        <h2>Site</h2>

        <LocalButton />
        <React.Suspense fallback="Loading...">
          <RemoteButton1 />
          <RemoteButton2 />
        </React.Suspense>
        <br />
        <br />

        <pre>
          {JSON.stringify(definitions, null, 2)}
        </pre>

        <div>
          {definitions.nav.map((definition: any) => {
            const { text, url } = definition;
            console.log('....definition', definition);

            return ( 
              <React.Fragment key={url}>
                <Link to={url}>{text}</Link> |
              </React.Fragment>
            );
          })}
        </div>

        {/* 
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
        */}
      </div>
    </BrowserRouter>
  );
};

export default App;
