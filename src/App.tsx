import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/challenge/:id"
        element={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <h2 className="text-2xl font-bold">Challenge Details Page</h2>
          </div>
        }
      />
    </Routes>
  );
}