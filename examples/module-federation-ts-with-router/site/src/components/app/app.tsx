import * as React from "react";
import LocalButton from "../button/button";

// TODO: fix types
const RemoteButton1 = React.lazy(() => import("app1/button"));
const RemoteButton2 = React.lazy(() => import("app2/button"));

const App = () => (
  <div>
    <h1>module-federation-ts-with-router</h1>
    <h2>App 1</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <RemoteButton1 />
      <RemoteButton2 />
    </React.Suspense>
  </div>
);

export default App;
