import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

export const ButtonSite = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: site/button');
  }, []);

  return <button className="button-site">Site Button</button>;
};
