import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

export const ButtonSharedTools = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: shared-tools/button');
  }, []);

  return <button className="button-shared-tools">Shared Tools Button</button>;
};
