import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import LandscapePage from './pages/LandscapePage';
import SkillsPage from './pages/SkillsPage';
import DistributionPage from './pages/DistributionPage';

export default function RouterApp() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/landscape" element={<LandscapePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/distribution" element={<DistributionPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
