import * as React from 'react';
import { useEffect } from 'react';
import './button.css';

export const ButtonSharedTools = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: ButtonSharedTools');
  }, []);

  return <button className="button-shared-tools">Button - Shared Tools</button>;
};
