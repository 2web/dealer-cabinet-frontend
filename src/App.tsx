import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import PageNotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

import Orders from './pages/Orders';
import Order from './pages/Order';
import AccountPanel from './pages/Settings';

function App() {
  const location = useLocation();

  useEffect(() => {
    const htmlElement = document.querySelector("body");
    if (htmlElement !== null){
      htmlElement.style.scrollBehavior = 'auto'
    }
    window.scroll({ top: 0 })
    if (htmlElement !== null){
      htmlElement.style.scrollBehavior = ''
    }
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order" element={<Order />} />
        <Route path="/settings" element={<AccountPanel />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
