import _ from 'lodash';
import * as ti from './tsindex';


function component() {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello', 'webpack', ti.aa()], ' ');

    return element;
}

document.body.appendChild(component());