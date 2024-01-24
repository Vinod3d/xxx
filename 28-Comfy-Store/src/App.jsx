import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProducts,
} from "./pages";

import { ErrorElement } from './components';
// loaders
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProducts'
// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children : [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement/>,
        loader : landingLoader,
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProducts />,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'orders',
        element: <Orders />
      },

    ]
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>,
  },
  {
    path: '/register',
    element: <Register/>,
    errorElement: <Error/>,
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
