import LoginForm from "../../../components/login/login_form.component";

import "./login.page.css";

const Login: React.FC = () => {
  return (
    <section className="h-screen md:flex">
      <LoginForm />
    </section>
  );
};

export default Login;
