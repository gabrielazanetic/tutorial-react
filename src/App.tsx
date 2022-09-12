import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TutorialPage from './pages/TutorialPage';
import AuthPage from './pages/AuthPage';
import { AuthContext } from './utils/context';
import ProfilePage from './pages/ProfilePage';

function App() {
  const toggleAuth = () => {
    if(isLoggedIn === false) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <AuthContext.Provider value={{loggedIn: isLoggedIn, toggleAuth}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tutorial" element={<TutorialPage />} />

            <Route path="/my-profile" element={<ProfilePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/logout" element={<AuthPage removeAuth={true} />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;