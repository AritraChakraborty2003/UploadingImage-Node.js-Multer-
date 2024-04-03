import logo from './logo.svg';
import './App.css';
import Fileupload from './pages/Fileupload'
import Imagedisplay from './pages/Imagedisplay'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Fileupload />} />
      <Route path="imageDisplay" element={<Imagedisplay />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
