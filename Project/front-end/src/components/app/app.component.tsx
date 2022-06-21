import { Route, Routes, useLocation } from "react-router-dom";
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
import ReservationPage from "src/pages/home/client/reservation.page";

import "./app.component.css";
import { Children, ReactElement, useEffect, useState } from "react";
import NotFound from "src/pages/404/404.page";
import { useAppSelector } from "src/common/hooks/reduxHooks";

const HomeRendrer = ({ children }: { children: ReactElement }) => {
  return <>{children}</>;
};

// const user = JSON.parse(localStorage.getItem("user")!) ? true : false;

const App = () => {
  const { storedValue } = useLocalStorage<OrganisateurData>("user");
  const [currentHome, setCurrentHome] = useState<any>();
  const { user, isAuthed } = useAppSelector((state) => state.profile);
  const location = useLocation();

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

  useEffect(() => {
    console.log(storedValue);
    // setCurrentHome(homePage(user));
    if(user.role) {
      setCurrentHome(homePage(user));
    } else {
      setCurrentHome(homePage(storedValue));
    }
  }, [user, storedValue]);

  return (
    <>
      {!isAuthed && (location.pathname !== "/" && !isAuthed && <Header />) }


      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomeRendrer>{currentHome}</HomeRendrer>} />

        {!isAuthed && <Route path="/about" element={<About />} />}
        {!isAuthed && <Route path="/contact" element={<Contact />} />}
        {!isAuthed && <Route path="/login" element={<Login />} />}
        {!isAuthed && <Route path="/register" element={<RegisterPage />} />}
        {!isAuthed && (
          <Route path="/register/client" element={<ClientRegisterPage />} />
        )}
        {isAuthed && (
          <Route path="/client/reservations" element={<ReservationPage />} />
        )}
        {!isAuthed && (
          <Route
            path="/register/organisateur"
            element={<OrganisateurRegisterPage />}
          />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAuthed && <Footer /> }

      {/* <Footer /> */}
    </>
  );
};

export default App;
