import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/header.component";
import Home from "../../pages/home/home.page";
import AdminHomePage from "../../pages/home/admin/admin.home.page";
import OrganisateurHomePage from "../../pages/home/organisateur/organisateur.home.page";
import About from "../../pages/about/about.page";
import Contact from "../../pages/contact/contact.page";
import Login from "../../pages/auth/login/login.page";
import RegisterPage from "../../pages/auth/register/register.page";
import ClientRegisterPage from "../../pages/auth/register/r-client/client-register.page";
import OrganisateurRegisterPage from "../../pages/auth/register/r-organisateur/organisateur-register.page";
import Footer from "../footer/footer.component";

import "../../common/styles/index";
import useLocalStorage from "../../common/hooks/useLocaleStorage";
import { OrganisateurData } from "../../models";
import ClientHomePage from "src/pages/home/client/client.home.page";

import "./app.component.css";
import ReservationPage from "src/pages/home/client/reservation.page";

const homePage = (user?: OrganisateurData) => {
  switch (user?.role) {
    case "admin":
      return <AdminHomePage />;

    case "client":
      return <ClientHomePage />;

    case "organisateur":
      return <OrganisateurHomePage />;

    default:
      return <Home />;
  }
};

// const user = JSON.parse(localStorage.getItem("user")!) ? true : false;

const App = () => {
  const [user] = useLocalStorage<OrganisateurData>("user");

  return (
    <Router>
      {!user && <Header />}

      {/* <Header /> */}
      <Routes>
        <Route path="/" element={homePage(user)} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/client" element={<ClientRegisterPage />} />
        <Route path="/client/reservations" element={<ReservationPage />} />
        <Route
          path="/register/organisateur"
          element={<OrganisateurRegisterPage />}
        />
      </Routes>
      {!user && <Footer />}

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
