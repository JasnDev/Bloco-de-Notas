import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/title.jsx';
import CheckBox from './components/checkBox.jsx';
import ListItems from './components/listItemDeleteButton.jsx';
import App from './App.jsx';
import List from './components/listMain.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List />
  </React.StrictMode>,
)
