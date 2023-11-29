import { Navigate, Route, Routes } from "react-router-dom";
import "./App.styled.jsx";
import { AppWrapper } from "./App.styled.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout/Layout.jsx";
import { lazy } from "react";
import { PublicRoute } from "./components/Routes/PublicRoute.js";
import { PrivateRoute } from "./components/Routes/PrivateRoute.js";

const RegisterForm = lazy(() =>
  import("./pages/RegisterForm/RegisterForm.jsx")
);
const LoginForm = lazy(() => import("./pages/LoginForm/LoginForm.jsx"));
const Games = lazy(() => import("./pages/Games/Games.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));

function App() {
  return (
    <AppWrapper>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/games" restricted>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/games" restricted>
                <LoginForm />
              </PublicRoute>
            }
          />
          <Route
            path="/games"
            element={
              <PrivateRoute>
                <Games />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </AppWrapper>
  );
}

export default App;
