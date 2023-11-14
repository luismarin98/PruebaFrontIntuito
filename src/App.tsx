import { Routes, Route } from "react-router-dom";
import { CustomerContainer, MovieContainer, RoomContainer } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="m-2">
      <Navbar />
      <Routes>
        <Route path="/movies" element={<MovieContainer />} />
        <Route path="/customer" element={<CustomerContainer />} />
        <Route path="/rooms" element={<RoomContainer />} />
      </Routes>
    </div>
  );
}

export default App;
