import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

const Button = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: site/button');
  }, []);

  return <button className="site-button">Site Button 6666</button>;
};

export default Button;
