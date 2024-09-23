import "./assets/css/style.css"
import HomePage from "./components/pages/HomePage";
import Header from "./components/Header";
import Categories from "./components/pages/Categories";
import Int1 from "./components/pages/Int1";
import Team1 from "./components/pages/Team1";
import Menu from "./components/Menu";
import PostList from "./components/PostList";
import {Routes, Route} from "react-router-dom";
import TeamDetail from "./components/pages/TeamDetail";


function App() {
  return (
    <div>
     <Header />
    <main>
      <Routes>
      <Route path="/" element={<Menu />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/post/:id" element={<Int1 />} />
        <Route path="/team/category/:id" element={<Team1 />} />
        <Route path="/team/player/:id" element={<TeamDetail />} />
        </Routes>
      </main>
      </div>
    );
}

export default App;
