import { useRoutes, BrowserRouter } from "react-router-dom";
import LoginForm from "../pages/Login";
import SignUpForm from "../pages/SignupForm";
import EmployeeDashboard from "../pages/Employee";
import ManagerPage from "../pages/Manager";

const isAuthenticated = () => {
  const authenticated = localStorage.getItem("isAuthenticated");
  if (!authenticated) {
    return false;
  }
  return true;
};

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <LoginForm /> },
    { path: "/sign-up", element: <SignUpForm /> },
    {
      path: "/employee",
      element: isAuthenticated() ? <EmployeeDashboard /> : <LoginForm />,
    },
    {
      path: "/manager",
      element: isAuthenticated() ? <ManagerPage /> : <LoginForm />,
    },
  ]);
};

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Routes;
