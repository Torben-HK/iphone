import { Routes, Route, Navigate } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Privacy />} />
      <Route path="/barrierefreiheit" element={<Accessibility />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Sentry.withProfiler(App);
