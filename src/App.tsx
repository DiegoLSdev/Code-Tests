import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Solution from './pages/Solution';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/challenge/:id" element={<Challenge />} />
      <Route path="/challenge/:id/solution" element={<Solution />} />
    </Routes>
  );
}