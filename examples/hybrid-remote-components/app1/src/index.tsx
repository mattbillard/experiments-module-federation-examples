import * as React from "react";
import * as ReactDOM from "react-dom";

// NOTE: remote components need this
declare const window: any;
window.React = React;

import App from "./components/app/app";

ReactDOM.render(<App />, document.getElementById("root"));
