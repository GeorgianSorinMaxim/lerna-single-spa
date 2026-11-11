import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import rootComponent from './root.component.js';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,
  domElementGetter: () => document.getElementById('app1')
});

export const bootstrap = (props) => lifecycles.bootstrap(props);

export const mount = (props) => {
  createDomElement();
  return lifecycles.mount(props);
};

export const unmount = (props) => lifecycles.unmount(props);

function createDomElement() {
  let el = document.getElementById('app1');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app1';
    document.body.appendChild(el);
  }
  return el;
}
