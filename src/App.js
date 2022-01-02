import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/pages/Home";
import List from "./components/List";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound/404";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const decodedUser = jwtDecode(token) || {};
      setUser({...decodedUser});
    } catch (error) {}
  }, []);

  return (
    <div className="App">
      <NavBar user={user} />
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/lists" element={<List />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*"  element={<Navigate to="/not-found" />} />

      </Routes>
    </div>
  );
}

export default App;
