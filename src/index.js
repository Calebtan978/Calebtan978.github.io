import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./views/Home";
import Work from "./views/Work";
import Contact from "./views/Contact";
import About from "./views/About";
import Experience from "./views/Experience";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }, {
                path: "/about",
                element: <About/>
            }, {
                path: '/experience',
                element: <Experience/>
            }, {
                path: "/work",
                element: <Work/>
            }, {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
