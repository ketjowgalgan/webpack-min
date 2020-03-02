import React from "react";
import ReactDOM from "react-dom";

import _ from 'lodash'
import Init from './js/components/Init';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.less';

const body =  document.querySelector('body');
body 
    ? ReactDOM.render(<Init />, body) 
    : body.textContent = 'nie ma reacta';
