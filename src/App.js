import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { darkTheme, lightTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Home } from "./views/Home";
import Navbar from "./views/Navbar";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import Explore from "./views/Explore";
import Profile from "./views/Profile";
import Post from "./views/Post";

function App() {
  const { theme, themeToggler } = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <Navbar theme={theme} toggle={themeToggler} />
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
