import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

export const ButtonApp2 = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: ButtonApp2');
  }, []);

  return <button className="button-app2">Button - App2</button>;
};

export default ButtonApp2;
