import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './App.css';
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Header/> */}
//     {/* <Footer name="BhuwanRoyal" Age="29">
//       <button>Click here</button>
//     </Footer>
//     <Footer name="React tutorial ..." job="Senior software engineer..."/> */}
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>

);