import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home/index.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <App />
      ),
      children: [
        {
          path: '/',
          element: (<Home />)
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
