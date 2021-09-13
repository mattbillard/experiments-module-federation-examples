import * as React from "react";
import { useEffect } from "react";
import "./button.css";

const Button = () => {
  useEffect(() => {
    console.log("....Hooks are working, proving React is shared between micro apps: site/button");
  }, []);
  
  return <button className="site-button">Site Button 222</button>;
};

export default Button;
