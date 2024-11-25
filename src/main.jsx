import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MindCharterproject from './Pages/MindCharterproject';
import DataAnalysisProject from './Pages/DataAnalysisProject';
import ComingSoon from './Pages/ComingSoon';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MindCharterProject" element={<MindCharterproject />} />
        <Route path="/DataAnalysisProject" element={<DataAnalysisProject />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
