import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/index.tsx';
import RegisterProduct from './pages/register/index.tsx';
import Login from './pages/login/index.tsx';

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
        },
        {
          path: '/register',
          element: (<RegisterProduct />)
        },
        {
          path: '/login',
          element: (<Login/>)
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
