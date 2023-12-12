import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Signup/Signup';
import Login from './Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
