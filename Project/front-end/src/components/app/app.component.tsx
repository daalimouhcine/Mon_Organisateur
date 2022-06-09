import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/header.component";
import Home from "../../pages/home/home.page";
import AdminHomePage from "../../pages/home/admin/admin.home.page";
import OrganisateurHomePage from '../../pages/home/organisateur/organisateur.home.page';
import About from "../../pages/about/about.page";
import Contact from "../../pages/contact/contact.page";
import Login from "../../pages/auth/login/login.page";
import RegisterPage from "../../pages/auth/register/register.page";
import ClientRegisterPage from "../../pages/auth/register/r-client/client-register.page";
import OrganisateurRegisterPage from "../../pages/auth/register/r-organisateur/organisateur-register.page";
import Footer from "../footer/footer.component";

import "../../common/styles/index";
import "./app.component.css";


const homePage = () => {
  let user = JSON.parse(localStorage.getItem("user")!) || "";
  
  switch(user.role) {
      case "admin":
          return <AdminHomePage />;

      case "client":
          return <Home />;
          
      case "organisateur":
          return <OrganisateurHomePage />;

      default:
          return <Home />;
  }
};

const user = JSON.parse(localStorage.getItem("user")!) ? true : false;

const App = () => {


  return (
    <Router>
      {!user && <Header />}

      {/* <Header /> */}
      <Routes>
        <Route path="/" element={homePage()} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/client" element={<ClientRegisterPage />} />
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
