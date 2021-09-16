import * as _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch, RouteProps } from 'react-router-dom';

import { ButtonSharedTools } from '@company/core-team__shared-tools'; // Example importing component with hooks from dist
import { ButtonSite } from '../button/button';
import './app.css';

import { DynamicModuleFederationLoader } from '@company/core-team__shared-tools';
// NOTE: necessary if you want to import DynamicModuleFederationLoader from dist
// @ts-ignore
window.__webpack_init_sharing__ = __webpack_init_sharing__;
// @ts-ignore
window.__webpack_share_scopes__ = __webpack_share_scopes__;

// TODO: move the JSON file
const teamDefinitions = require('./team-definitions.json');

// TODO: fix types
// const RemoteButton1 = React.lazy(() => import("app1/button"));
// const RemoteButton2 = React.lazy(() => import("app2/button"));

export const AppSite = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [definitions, setDefinitions] = useState<any>({ nav: [] });

  useEffect(() => {
    // Allow overwrite of defaultDefitions with local definitions
    teamDefinitions.teams.forEach((teamDefinition: any) => {
      const { teamId, teamDefinitionUrl } = teamDefinition;

      try {
        const res = fetch(teamDefinitionUrl)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
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
          });
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
        <h1>Module Federation - Full Example</h1>
        <h2>Site</h2>

        <ButtonSite />
        <ButtonSharedTools />
        <br />
        <br />

        <div className="navigation">
          {definitions.nav.map((definition: any) => {
            const { text, url } = definition;

            return (
              <React.Fragment key={url}>
                <Link to={url}>{text}</Link>
              </React.Fragment>
            );
          })}
        </div>

        <div className="box">
          <Switch>
            {definitions.nav.map((definition: any) => {
              const { moduleFederationComponentId, url } = definition;
              const { module, remoteEntryUrl, scope } = definitions.apps[moduleFederationComponentId];

              return (
                <Route
                  key={url}
                  path={url}
                  render={(routeProps: RouteProps) => (
                    <DynamicModuleFederationLoader
                      module={module}
                      remoteEntryUrl={remoteEntryUrl}
                      scope={scope}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
