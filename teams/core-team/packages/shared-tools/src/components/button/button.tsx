import * as React from 'react';
import { useEffect } from 'react';
import styles from './button.module.scss';

export const ButtonSharedTools = () => {
  useEffect(() => {
    console.log('....Hooks are working, proving React is shared between micro apps: ButtonSharedTools');
  }, []);

  return <button className={styles.buttonSharedTools}>Button - Shared Tools</button>;
};
