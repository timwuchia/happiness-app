import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import Survey from './pages/Survery'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/*" element={<Survey />} />
          <Route path="/recommendation/*" element={<Recommendation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
