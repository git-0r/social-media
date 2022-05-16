import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/auth/login/Login";
import { Signup } from "./views/auth/signup/Signup";
import { Home } from "./views/home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyles } from "./globalStyles.js";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { darkTheme, lightTheme } from "./theme";
import Navbar from "./views/navigation/Navbar";

function App() {
  const { theme, themeToggler } = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeProvider theme={themeMode}>
          <Navbar theme={theme} toggle={themeToggler}>
            toggle
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
