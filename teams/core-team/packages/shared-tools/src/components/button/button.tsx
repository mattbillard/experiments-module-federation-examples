import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

export const Button = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: shared-tools/button');
  }, []);

  return <button className="shared-tools-button">Shared Tools Button</button>;
};
