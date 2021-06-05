//allowing us to use react
import React from 'react';
//allowing us to use virtual DOM
import ReactDOM from 'react-dom';
//allows import of index.css file 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
