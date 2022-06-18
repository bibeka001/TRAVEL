import TopBar from "../src/Component/TopBar/TopBar";
import Home from "./PAGES/Home/Home";
import Single from "./PAGES/Single/Single";
import Write from "./PAGES/WRITE/Write";
import Settings from "./PAGES/SETTINGS/Settings";
import Login from "./PAGES/LOGIN/Login";
import Register from "./PAGES/REGISTER/Register";
import Sidebar from "../src/Component/SIDEBAR/Sidebar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SinglePost from "./Component/SinglePost/SinglePost";
function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/Write" element={user ? <Home /> : <Login />} /> 
      <Route exact path="/Sidebar" element={<Sidebar />} /> 
      <Route exact path="/singlepost" element={<SinglePost />} /> 
      </Routes>
    </Router>
  );
}

export default App;
