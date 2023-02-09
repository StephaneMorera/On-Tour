import "./styles/_global.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import EventDetailsPage from "./pages/EventDetailsPage/EventDetailsPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="events" element={<EventDetailsPage />}/>
      <Route path="profile" element={<ProfilePage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
