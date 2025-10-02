import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Curriculum from '@/pages/Curriculum/Curriculum'
import Dashboard from '@/pages/Admin/Dashboard'
import NotFound from '@/pages/NotFound/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}