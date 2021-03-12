import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// import { Add } from '../Components/Add/Add';
// import { Edit } from '../Components/Edit/Edit';
// import { Home } from '../Components/Home/Home';

// export const MainRoute = () => {
//     return (
//         <>
//         <Router>
//              <Switch>
//                 <Route path="/edit" component={Edit} />
//                 <Route path="/add" component={Add} />
//                 <Route path="/" component={Home} />
//             </Switch>
//         </ Router>
//         </>
//     )   
// }