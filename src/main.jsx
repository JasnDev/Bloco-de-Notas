import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/title.jsx';
import CheckBox from './components/checkBox.jsx';
import ListItems from './components/listItemDeleteButton.jsx';
import App from './App.jsx';
import List from './components/listMain.jsx';
import { firebaseConfig } from '/home/jass/Bloco-de-Notas/src/firebase.jsx'
import {  initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import './index.css';

initializeApp();
const db = getFirestore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List />
  </React.StrictMode>,
)
