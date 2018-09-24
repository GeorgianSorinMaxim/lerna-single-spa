import 'zone.js';
import * as singleSpa from 'single-spa';
import { loadApp } from './helper';

async function init() {
  await loadApp('app1', '/app1', '/app1/singleSpaEntry.js');

  singleSpa.start();
}

init();
