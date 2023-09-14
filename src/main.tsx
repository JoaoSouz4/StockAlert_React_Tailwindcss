import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/home/index.tsx';
import RegisterProduct from './pages/register/index.tsx';
import Login from './pages/login';

import { UpdatePass } from './pages/updatePass/index.tsx';
import { FormRegisterProvider } from './context/formRegister/index.tsx';
import { LoginProvider } from './context/loginContext/index.tsx';
import { AuthProvider } from './context/AuthContext/index.tsx';
import { TokenProvider } from './context/TokenContext/index.tsx';
import { AlertProvider } from './context/AlertContext/index.tsx';
import { UpdatePassProvider } from './context/UpdatePassContext/index.tsx';
import { ModalProvider } from './context/ModalContext/index.tsx';

const router = createBrowserRouter(

  [
    {
      path: '/',
      element: (
        <TokenProvider>
          <AuthProvider>
            <AlertProvider>
              <App />
            </AlertProvider>
          </AuthProvider>
        </TokenProvider>
      ),
      children: [
        {
          path: '/',
          element: (
            <ModalProvider>
              <Home />
            </ModalProvider>
          )
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

        {
          path: '/updatePass',
          element: (
            <UpdatePassProvider>
              <UpdatePass />
            </UpdatePassProvider>
          )
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
