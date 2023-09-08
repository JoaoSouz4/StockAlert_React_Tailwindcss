import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/home/index.tsx';
import RegisterProduct from './pages/register/index.tsx';
import Login from './pages/login/index.tsx';
import { FormRegisterProvider } from './context/formRegister/index.tsx';
import { LoginProvider } from './context/loginContext/index.tsx';


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
          element: (
            <FormRegisterProvider>
              <RegisterProduct />
            </FormRegisterProvider>
          )
        },
        {
          path: '/login',
          element: (
            <LoginProvider>
              <Login/>
            </LoginProvider>
          )
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
