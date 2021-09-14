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
// import { DynamicComponentLoader } from '@module-federation-ts-with-router/shared-tools';
import { DynamicComponentLoader } from '../dynamic-component-loader/dynamic-component-loader';
import { Test } from '@module-federation-ts-with-router/shared-tools';

console.log('....Test', Test);

// TODO: move the JSON file
const teamDefinitions = require("./team-definitions.json");

// TODO: fix types
// const RemoteButton1 = React.lazy(() => import("app1/button"));
// const RemoteButton2 = React.lazy(() => import("app2/button"));

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
          // TODO: fix
          // const newDefinitions = {
          //   nav: [
          //     ...definitions.nav,
          //     ...data.nav
          //   ]
          // };
          // setDefinitions(newDefinitions);

          setDefinitions(data);

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
        <Test text="Hello React" />

        <LocalButton />
        {/* 
        <React.Suspense fallback="Loading...">
          <RemoteButton1 />
          <RemoteButton2 />
        </React.Suspense>
         */}
        <br />
        <br />

        <div>
          {definitions.nav.map((definition: any) => {
            const { text, url } = definition;

            return ( 
              <React.Fragment key={url}>
                <Link to={url}>{text}</Link> |
              </React.Fragment>
            );
          })}
        </div>

        <Switch>
          {definitions.nav.map((definition: any) => {
            const { appId, url } = definition;
            const { module, remoteEntryUrl, scope } = definitions.apps[appId];

            return (
              <Route
                key={url}
                path={url}
                render={(routeProps: RouteProps) => 
                  <DynamicComponentLoader
                    module={module}
                    remoteEntryUrl={remoteEntryUrl}
                    scope={scope}
                />}
              />
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
