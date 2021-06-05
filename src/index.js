//allowing us to use react
import React from 'react';
//allowing us to use virtual DOM
import ReactDOM from 'react-dom';
//allows import of index.css file 
import './index.css';
//allowing use of app component  
import App from './App';
//allowing data to update date offline
import registerServiceWorker from './registerServiceWorker';

//controls the contents of App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
