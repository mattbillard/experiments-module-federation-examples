import * as React from "react";
import { useEffect } from "react";
import "./button.css";

const Button = () => {
  useEffect(() => {
    console.log("....Hooks are working, proving React is shared between micro apps: app2/button");
  }, []);
  
  return <button className="app2-button">App 2 Button 222</button>;
};

export default Button;
