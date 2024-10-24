import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer'; // Make sure Footer is correctly capitalized as well
import Discover from './pages/Discover';
import ProgramDetail from './pages/ProgramDetailPage';
import ProgramInsertPage from './pages/programInsertPage'; // Capitalized the component name

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/discover" element={<Discover />} />
        <Route path="/pip" element={<ProgramInsertPage />} /> 
        <Route path="/program/:id" element={<ProgramDetail />} />
        {/* Define more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
