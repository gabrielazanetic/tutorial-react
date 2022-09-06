import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import TutorialPage from './pages/TutorialPage';

function App() {
const isLoggedIn = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/my-profile" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/anything" />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;