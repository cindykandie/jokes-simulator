import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import JokeOfTheDay from "./pages/JokeOfTheDay";
import SubmitJoke from "./pages/SubmitJoke";
import ShareJoke from "./pages/ShareJoke";
import Settings from "./pages/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/joke-of-the-day" element={<JokeOfTheDay />} />
      <Route path="/submit-joke" element={<SubmitJoke />} />
      <Route path="/share-joke" element={<ShareJoke />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
