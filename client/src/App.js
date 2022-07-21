import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./Components/Form/FormPage";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
