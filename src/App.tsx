import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";

import { RouteProps } from "react-router-dom";
import FavouritesPage from "./pages/FavouritesPage";

interface CustomRouteProps  {
  exact?: boolean;
}
function App(props: CustomRouteProps & RouteProps) {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<FavouritesPage />} />

          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
