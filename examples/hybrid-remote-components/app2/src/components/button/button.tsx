import * as React from "react";
import { useEffect } from "react";
import "./button.css";

export interface IButton {
  text: string;
}
export const Button = (props: IButton) => {
  useEffect(() => {
    console.log("....Hooks are working, proving React is shared between micro apps: button2");
  }, []);
  return <button className="app2-button">App 2 Button {props.text}</button>;
};


// NOTE: hybrid-remote components
declare const window: any;
const REMOTE_NAME = 'app2Button';
window[REMOTE_NAME] = Button;


export default Button;
