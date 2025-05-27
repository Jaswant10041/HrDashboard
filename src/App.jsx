import { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { AppProvider } from "./GlobalState";
import EmployOverview from "./components/EmployOverview";
import Cards from "./components/Cards";
import Bookmarks from "./components/Bookmarks";

const App = () => {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  const handleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                bookmarkedIds={bookmarkedIds}
                onBookmark={handleBookmark}
              />
            }
          />
          <Route
            path="/bookmarks"
            element={
              <Bookmarks
                bookmarkedIds={bookmarkedIds}
                onBookmark={handleBookmark}
              />
            }
          />
          <Route path="/employee/:id" element={<EmployOverview />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;