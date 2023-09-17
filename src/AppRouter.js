import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StarshipList from './components/StarshipList';
import StarshipDetails from './components/StarshipDetails';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import NavButtons from './components/NavButtons';
import NavBar from './components/NavBar';





const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavButtons />
     <NavBar/>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/starships/:id" element={<StarshipDetails/>} />
        <Route path="/list" element={<StarshipList/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     
    </BrowserRouter>
  );
};

export default AppRouter;
