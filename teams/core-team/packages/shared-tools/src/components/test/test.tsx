// TODO: delete this file and wherever it is imported
import * as React from 'react';
import { useEffect } from 'react';

export const Test = (props: any) => {
  useEffect(() => {
    console.log('....useEffect: test');
  }, []);

  return <h1>Test basic component with hooks: {props.text}</h1>;
};
