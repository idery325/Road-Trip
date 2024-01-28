import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home"; 
import Page1 from "./pages/Page1"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/search" element={<Search />} /> 
        <Route path="/Page1" element={<Page1 />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
