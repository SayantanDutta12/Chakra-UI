import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx"
import Videos from "./components/Videos.jsx"
import Login from './components/Login.jsx'
import Upload from "./components/Upload";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Chakra-UI" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
