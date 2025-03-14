import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import About from "./pages/About.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
{/*                 <Route path="/admin" element={<AdminPanel />} /> */}
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
