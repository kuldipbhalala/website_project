import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import Mypayment from './components/Mypayment';
import Productpage from './components/Productpage';
import Headerpage from './components/Header/Headerpage';
import Footerpage from './components/Footer/Footerpage';
import NotFound from './components/NotFound';
import { Mywebcontext } from './components/mywebcontext/Mywebcontext';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <Mywebcontext>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Headerpage />
                  <Outlet />
                  <Footerpage />
                </>
              }
            >
              <Route path='/' element={<Home />} />
              <Route path='/productpage' element={<Productpage />} />
              <Route path='/cartPage' element={<CartPage />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/mypayment' element={<Mypayment />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Mywebcontext>
  );
}

export default App;