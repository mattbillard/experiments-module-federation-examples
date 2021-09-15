import * as React from 'react';

/**
 * CODE MODIFIED FROM: https://github.com/module-federation/module-federation-examples/blob/master/dynamic-system-host/app1/src/App.js
 */

declare const window: any;

function loadComponent(scope: string, module: string) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // @ts-ignore
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (url: string) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

export interface IDynamicModuleFederationLoader {
  module: string;
  remoteEntryUrl: string;
  scope: string;
}

export const DynamicModuleFederationLoader = (props: IDynamicModuleFederationLoader) => {
  const { module, scope, remoteEntryUrl } = props;
  const { ready, failed } = useDynamicScript(remoteEntryUrl);

  if (!props) return <span>Error: no system specified</span>;
  if (!ready) return <span>Loading...</span>;
  if (failed) return <span>Error: failed to load dynamic script: {remoteEntryUrl}</span>;

  const Component = React.lazy(loadComponent(scope, module));

  return (
    <React.Suspense fallback="Loading...">
      <Component />
    </React.Suspense>
  );
}