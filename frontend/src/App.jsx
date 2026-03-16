import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Author from "./components/Author";

const App = () => {
  return (
    <div className="h-screen bg-slate-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <Author />
    </div>
  );
};

export default App;
