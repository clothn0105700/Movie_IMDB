import SideBar from "./layouts/sideBar";
import MiddlePage from "./components/middle/middlePage";
import Search from "./components/search/search";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        {/* <MiddlePage /> */}
        <Routes>
          <Route path="/" element={<MiddlePage />} />
          <Route path="/discover" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
