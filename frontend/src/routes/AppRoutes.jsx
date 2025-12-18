import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Curriculum from '../pages/Curriculum/Curriculum';
import Admin from '../pages/Admin/Admin';
import Login from '../pages/Login/Login';
import ProtectedRoute from '../components/auth/ProtectedRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}
