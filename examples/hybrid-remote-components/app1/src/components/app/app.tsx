import * as React from "react";
import { RemoteButton } from '@hybrid-remote-components/app2';
import LocalButton from "../button/button";

const App = () => {
  return (
    <div>
      <h1>hybrid-remote-components</h1>
      <h2>App 1</h2>
      <LocalButton />
      <RemoteButton text="RemoteButton" />
    </div>
  );
};

export default App;
