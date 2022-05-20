import LoginForm from "../../../components/login/login_form.component";
import LoginSideContent from "../../../components/login/login_side_content.component";

import "./login.page.css";

const Login: React.FC = () => {
  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <LoginSideContent />
      <LoginForm />
    </section>
  );
};

export default Login;
