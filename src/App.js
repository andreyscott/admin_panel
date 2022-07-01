import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Register from './pages/Registration';
import Login from './pages/Login';
import Map from './pages/Maps';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Dashboard /> } />
        {/* <Route path="/dashboard" element={<Home /> } /> */}
        <Route path="/dashboard" element={<Home /> } />

        <Route path="/profile" element={<Profile /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/map" element={<Map /> } />
         <Route path="/auth/register" element={<Register /> } />


      </Routes>
      
    </div>
  );
}

export default App;
