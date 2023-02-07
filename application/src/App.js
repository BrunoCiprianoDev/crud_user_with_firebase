import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Content from './pages/content/Content';

import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/content" element={<Content/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
