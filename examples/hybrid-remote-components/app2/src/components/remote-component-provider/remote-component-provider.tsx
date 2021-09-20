import * as React from 'react';

declare const window: any;

/**
 * CODE MODIFIED FROM: https://github.com/module-federation/module-federation-examples/blob/master/dynamic-system-host/app1/src/App.js
 */
const useDynamicScript = (url: string) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
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



export const provideRemoteComponent = function<T>(jsUrl: string, remoteName: string) {
  const RemoteComponent = (props: T) => {
    const { ready, failed } = useDynamicScript(jsUrl);
  
    if (!ready) return <span>Loading...</span>;
    if (failed) return <span>Error: failed to load dynamic script: {jsUrl}</span>;
  
    const Component = window[remoteName];
    return <Component {...props} />
  }

  return RemoteComponent;
}
  