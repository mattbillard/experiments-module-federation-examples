import * as _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch, RouteProps } from 'react-router-dom';

import { DynamicModuleFederationLoader } from '@company/core-team__shared-tools';
import { ButtonSharedTools } from '@company/core-team__shared-tools';
import '@company/core-team__shared-tools/dist/main.css'; // Need to import CSS

import { ButtonSite } from '../button/button';
import logo1 from '../../../public/logo.svg';
const teamDefinitions = require('../../../public/team-definition-urls.json');
import './app.scss';

// NOTE: necessary if you want to import DynamicModuleFederationLoader from dist
// @ts-ignore
window.__webpack_init_sharing__ = __webpack_init_sharing__;
// @ts-ignore
window.__webpack_share_scopes__ = __webpack_share_scopes__;


// TODO: fix types
// @ts-ignore
const ButtonApp1 = React.lazy(() => import('exampleTeam1__app1/button'));
// @ts-ignore
const ButtonApp2 = React.lazy(() => import('exampleTeam1__app2/button'));

export const AppSite = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [definitions, setDefinitions] = useState<any>({ nav: {} });

  useEffect(() => {
    getTeamDefinitions(definitions, setDefinitions, setIsLoading);
  }, []);

  if (isLoading) {
    return null;
  }

  // prettier-ignore
  return (
    <BrowserRouter>
      <h1>Module Federation - Full Example</h1>

      <div className="box">
        <h2>Site</h2>
        
        <ButtonSite /> - regular import<br />
        <ButtonSharedTools /> - imported from shared-tools/dist<br /> 
        <React.Suspense fallback="Loading...">
          <ButtonApp1 /> - imported from app1 via module federation hardcoded in webpack config<br />
          <ButtonApp2 /> - imported from app2 via module federation hardcoded in webpack config<br />
        </React.Suspense>
        <br />
        <br />

        <img src={logo1} className="logo-svg" /> - Example SVG <br />
        <img src="/assets/core-team__site/logo.png" className="logo-png" /> - Example PNG
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

        Imported dynamically via module federation...
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

const getTeamDefinitions = async (definitions: any, setDefinitions: any, setIsLoading: any) => {
  await Promise.all(
    teamDefinitions.map(async (teamDefinitionUrl: string) => {
      const res = await fetch(teamDefinitionUrl);
      const teamDefinition = await res.json();

      const newDefinitions = {
        nav: [...definitions.nav, ...teamDefinition.nav],
        apps: {
          ...definitions.apps,
          ...teamDefinition.apps,
        },
      };
      setDefinitions(newDefinitions);
    }),
  );
 
  setIsLoading(false);
};
