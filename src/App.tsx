import { Routes, Route } from "react-router-dom";
import {
  CustomerContainer,
  MovieContainer,
  RoomContainer,
  SeatsContainer,
} from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="m-2">
      <Navbar />
      <Routes>
        <Route path="/movies" element={<MovieContainer />} />
        <Route path="/customer" element={<CustomerContainer />} />
        <Route path="/rooms" element={<RoomContainer />} />
        <Route path="/seats" element={<SeatsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
