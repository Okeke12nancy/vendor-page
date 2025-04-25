import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Navbar from './Components/navbar';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import Payments from './Pages/Payments';
import Settings from './Pages/Settings';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
