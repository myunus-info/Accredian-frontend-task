import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
