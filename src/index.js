
import './index.css';
import Store from './State/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderAllTree = () => {
    root.render(
        <React.StrictMode>
            <App State={Store.State} addMessage={Store.addMessage.bind(Store)} updateNewMessage={Store.updateNewMessage.bind(Store)} />
        </React.StrictMode>
    );
}
rerenderAllTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


Store.subscribe(rerenderAllTree);
