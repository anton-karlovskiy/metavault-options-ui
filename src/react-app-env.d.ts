/// <reference types="react-scripts" />

// MEMO: inspired by https://stackoverflow.com/questions/54121536/typescript-module-svg-has-no-exported-member-reactcomponent
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// TODO: workaround for using `react-table` in TypeScript
declare module 'react-table';