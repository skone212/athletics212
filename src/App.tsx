import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RoutineDetail from "./pages/RoutineDetail";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/routine/:id" element={<RoutineDetail />} />
    </Routes>
  );
}