import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { RequiresAuth } from "./components/RequiresAuth/RequiresAuth";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { Profile } from "./pages/Profile/Profile";
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
