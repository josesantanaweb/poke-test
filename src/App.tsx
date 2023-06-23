import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./themes/global";
import { defaultTheme } from './themes/theme';
import { ProtectedRoute } from "./components/ProtectedRoutes"
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import { useStore } from "./store";

const App = () =>  {
  const darkTheme = useStore((state) => state.darkTheme);
  const isAuth = useStore((state) => state.isAuth);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle darkTheme={darkTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            element={<ProtectedRoute isAllowed={isAuth} children={undefined} />}
          >
            <Route path="/" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
