
import { GlobalProvider } from "./components/context/GlobalContext.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import GameListPage from "./components/pages/GameListPage.jsx";
import ComparisonPage from "./components/pages/ComparisonPage.jsx";
import WishlistPage from "./components/pages/WishlistPage.jsx";
import DefaultLayout from "./components/pages/DefaultLayout.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/games" element={<GameListPage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="/wish" element={<WishlistPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
