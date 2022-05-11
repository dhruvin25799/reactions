import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile } from "./pages/index";
import { NavBar, RequiresAuth } from "./components/index";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <>
      <div className="App" data-theme={isDark && "dark"}>
        <ToastContainer theme={isDark ? "dark" : "light"} />
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
