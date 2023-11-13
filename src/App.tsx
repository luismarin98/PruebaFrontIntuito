import { Routes, Route } from "react-router-dom";
import { MovieContainer } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="m-2">
      <Navbar />
      <Routes>
        <Route path="/movies" element={<MovieContainer />} />
      </Routes>
    </div>
  );
}

export default App;
