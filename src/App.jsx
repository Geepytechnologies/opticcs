import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadPage from './screens/LoadPage';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Registration2 from './components/Registration2';
import RegistrationSuccess from './components/RegistrationSuccess';
import RegistrationOtp from './components/RegistrationOtp';
import Dashboard from './screens/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/register2" element={<Registration2 />}></Route>
        <Route path="/register3" element={<RegistrationOtp />}></Route>
        <Route path="/register4" element={<RegistrationSuccess />}></Route>
        <Route path="/user/dashboard/*" element={<Dashboard />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
