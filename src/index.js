import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './patterns/rednerPropsLiftingState';
import reportWebVitals from './reportWebVitals';
import RenderProps from './patterns/renderPropsPattern';
import Input from './patterns/hookPattern';
const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = (props) => props.render();
RenderProps()
root.render(
  <React.StrictMode>
    <Input/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
