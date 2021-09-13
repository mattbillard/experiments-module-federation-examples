import * as React from "react";
import { useEffect } from "react";
import "./button.css";

const Button = () => {
  useEffect(() => {
    console.log("....Hooks are working, proving React is shared between micro apps: app1/button");
  }, []);
  
  return <button className="app1-button">App 1 Button 444</button>;
};

export default Button;
