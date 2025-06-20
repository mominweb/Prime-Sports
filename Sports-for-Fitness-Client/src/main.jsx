import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AllSportsItems from './components/AllSportsItems.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import PrivateRoute from './components/routs/PrivateRoute.jsx';
import ProductDetails from './components/ProductDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
    path:"/login",
    element: <Login></Login>
  },
  {
    path:"/register",
    element: <Register></Register>
  },
  {
    path:"/products",
    element: <AllSportsItems></AllSportsItems>
  },
  {
    path:"",
    element: <Navigate to={"/products"}></Navigate>
  },
  {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },


    ]
  },
  
  {
    path:"*",
    element: <h1> oops! Wrong Way</h1>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
