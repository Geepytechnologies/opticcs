import './App.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LoadPage from './screens/LoadPage';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Registration2 from './components/Registration2';
import RegistrationSuccess from './components/RegistrationSuccess';
import RegistrationOtp from './components/RegistrationOtp';
import Test from './components/Test';
import Dashboard from './screens/dashboard/Dashboard';
import RequireAuth from "./utils/RequireAuth";
import PersistLogin from './utils/PersistLogin';
import Loader from './components/Loader';
import { useAuth } from './utils/hooks/useAuth';
import RequireIsSignedIn from './utils/RequireIsSignedIn';


function App() {
  const { auth } = useAuth();
  const isSignin = location.state?.from?.pathname === "/user/login";
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/user/login" element={<Login />}></Route>
        </Route>

        <Route path="/user/register" element={<Registration />}></Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/*" element={<Dashboard />}></Route>
          </Route>
        </Route>

        <Route path="/register2" element={<Registration2 />}></Route>
        <Route path="/register3" element={<RegistrationOtp />}></Route>
        <Route path="/register4" element={<RegistrationSuccess />}></Route>
        <Route path="/loader" element={<Loader />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
