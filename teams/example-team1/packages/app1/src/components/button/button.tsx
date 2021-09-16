import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

export const ButtonApp1 = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: app1/button');
  }, []);

  return <button className="button-app1">App 1 Button</button>;
};
