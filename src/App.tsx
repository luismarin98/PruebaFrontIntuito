import { Routes, Route } from "react-router-dom";
import {
  BillboardContainer,
  BookingContainer,
  CustomerContainer,
  MovieContainer,
  RoomContainer,
  SeatsContainer,
} from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<MovieContainer />} />
        <Route path="/customer" element={<CustomerContainer />} />
        <Route path="/rooms" element={<RoomContainer />} />
        <Route path="/seats" element={<SeatsContainer />} />
        <Route path="/billboards" element={<BillboardContainer />} />
        <Route path="/bookings" element={<BookingContainer />} />
      </Routes>
    </div>
  );
}

export default App;
