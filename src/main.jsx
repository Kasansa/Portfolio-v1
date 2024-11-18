import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './routes/Dashboard';
import Contact from './routes/Contact';
import MindCharterproject from './Pages/MindCharterproject';
import DataAnalysisProject from './Pages/DataAnalysisProject';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/MindCharterProject" element={<MindCharterproject />} />
        <Route path="/DataAnalysisProject" element={<DataAnalysisProject />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
