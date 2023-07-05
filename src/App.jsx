import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LoadPage from './screens/LoadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Registration from './screens/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/load" element={<LoadPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
