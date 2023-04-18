import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from'./HomePage';
import Login from './Login';
import Registration from './Registration';
import SearchDelete from './SnD';
import Logout from './Logout';

function App() {
  return (
    <div >
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/Search" element={<SearchDelete />} />
          <Route path="/Logout" element={<Logout/>} />

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
