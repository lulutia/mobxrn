import React, {Component} from 'react';
import {default as Page2} from './page2';
import {default as Page1} from './page1';

const routes = [
  { path: '/', action: () => Page1 },
  { path: '/page1', action: () => Page1 },
  { path: '/page2', action: () => Page2 }
];

export {routes};