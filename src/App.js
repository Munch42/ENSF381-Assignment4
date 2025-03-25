import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LoginForm from "./components/LoginForm";
import CoursesPage from "./components/CoursesPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
