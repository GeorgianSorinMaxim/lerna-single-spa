import { start } from 'single-spa';
import { loadApp } from './helper';

loadApp('app1', '/app1', '/app1/singleSpaEntry.js');
start();
