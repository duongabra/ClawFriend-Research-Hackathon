import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import ReaderPage from './ReaderPage';

export default function RouterApp() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route
            path="/landscape"
            element={
              <ReaderPage
                title="Competitive Landscape"
                mdPath="competitive-landscape.md"
              />
            }
          />
          <Route
            path="/skills"
            element={
              <ReaderPage
                title="Skill Research"
                mdPath="skill-research.md"
              />
            }
          />
          <Route
            path="/distribution"
            element={
              <ReaderPage
                title="Distribution Plan"
                mdPath="distribution-plan.md"
              />
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
