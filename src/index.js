import _ from 'lodash';
//import './style.css';
import './style.scss';
import { area, circircumferencecle } from './js/circle.js';
import cube_default_export from './js/cube.js';

function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  console.log( area(10) );
  console.log( cube_default_export(10) );