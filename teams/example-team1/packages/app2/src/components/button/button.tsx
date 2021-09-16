import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

export const ButtonApp2 = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: app2/button');
  }, []);

  return <button className="button-app2">App 2 Button</button>;
};

export default ButtonApp2;
