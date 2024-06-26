import "./App.css";
import { Outlet } from "react-router-dom";
import DownloadApp from "./Components/Sections/DownloadApp/DownloadApp";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* search, home,bookings components are available in outlet  */}
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
