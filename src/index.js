import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// StrictMode가 활성화 되어있으면, multiple component를 같이 로딩할 수 있다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);