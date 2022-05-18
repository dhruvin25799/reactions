import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Bookmarks } from "./pages/index";
import { NavBar, PostModal, RequiresAuth } from "./components/index";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  const showModal = useSelector(state => state.modal.showModal);
  return (
    <>
      <div className="App" data-theme={isDark && "dark"}>
        <ToastContainer theme={isDark ? "dark" : "light"} />
        {showModal && <PostModal/>}
        <NavBar />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <RequiresAuth>
                  <Home />
                </RequiresAuth>
              }
            />
            <Route
              path="/profile/:userID"
              element={
                <RequiresAuth>
                  <Profile />
                </RequiresAuth>
              }
            />
            <Route path="/bookmarks" element={<RequiresAuth><Bookmarks/></RequiresAuth>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
