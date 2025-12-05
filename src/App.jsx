import { Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Thanks from "../src/pages/Thanks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gracias" element={<Thanks />} />
    </Routes>
  );
}

export default App;
