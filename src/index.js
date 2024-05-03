import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const pages = createBrowserRouter([{
  path : '/',
  element : <App/>, 
  errorElement : <h1>Sorry....</h1>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={pages} />
  </React.StrictMode>
);


