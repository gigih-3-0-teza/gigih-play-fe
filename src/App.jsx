import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
