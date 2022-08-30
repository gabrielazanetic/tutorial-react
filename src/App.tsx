import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TutorialPage from './pages/TutorialPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/tutorial" element={<TutorialPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;