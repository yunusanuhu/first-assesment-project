import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./components/Users/Users";
import Details from "./components/Details/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
