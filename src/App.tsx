import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Login from './pages/Login';
import SpecialCases from './pages/SpecialCases';
import OrderDetails from './pages/OrderDetails';
import CanceledOrderDetails from './pages/CanceledOrderDetails';
import RiderDetails from './pages/RiderDetails';
import CommercialActivityDetails from './pages/CommercialActivityDetails';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <PageTitle title="Home Page" />
              <ECommerce />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <PageTitle title="Login Page" />
              <Login />
            </>
          }
        />
        <Route
          path="/specialCases"
          element={
            <>
              <PageTitle title='Special Cases Page' />
              <SpecialCases />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title='Tables Page' />
              <Tables />
            </>
          }
        />
        <Route
          path="/order/:id"
          element={
            <>
              <PageTitle title="Order Page" />
              <OrderDetails />
            </>
          }
        />
        <Route
          path="/CanceledOrder/:id"
          element={
            <>
              <PageTitle title="Canceled Order Page" />
              <CanceledOrderDetails />
            </>
          }
        />
        <Route
          path="/RiderDetails/:id"
          element={
            <>
              <PageTitle title="Rider Details Page" />
              <RiderDetails />
            </>
          }
        />
        <Route
          path="/CommercialActivityDetails/:id"
          element={
            <>
              <PageTitle title="Commercial Activity Details Page" />
              <CommercialActivityDetails />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings Page" />
              <Settings />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
