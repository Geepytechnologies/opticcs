import './App.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import LoadPage from './screens/LoadPage';
import Login from './screens/Login';
import Registration from './screens/Registration';
import RequireAuth from "./utils/RequireAuth";
import PersistLogin from './utils/PersistLogin';
import { useAuth } from './utils/hooks/useAuth';
import RequireIsSignedIn from './utils/RequireIsSignedIn';
import StateApp from './screens/state/StateApp';
import NationalApp from './screens/national/NationalApp';
import HealthFacilityApp from './screens/healthFacility/HealthFacilityApp';
import LgaApp from './screens/lga/LgaApp';
import Loader from './components/Loader';
import LandingPage from './components/LandingPage';



function App() {
  const { auth } = useAuth();
  const isSignin = location.state?.from?.pathname === "/user/login";
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<RequireIsSignedIn />}>
            <Route path="/user/login" element={<Login />}></Route>
          </Route>
        </Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequireIsSignedIn />}>
            <Route path="/user/register" element={<Registration />}></Route>
          </Route>
        </Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/national/*" element={<NationalApp />}></Route>
            <Route path="/state/*" element={<StateApp />}></Route>
            <Route path="/lga/*" element={<LgaApp />}></Route>
            <Route path="/healthfacility/*" element={<HealthFacilityApp />}></Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
