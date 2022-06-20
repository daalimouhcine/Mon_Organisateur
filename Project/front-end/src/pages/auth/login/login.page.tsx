import LoginForm from "../../../components/login/login_form.component";

import "./login.page.css";

const Login: React.FC = () => {
  return (
    <section className="h-screen flex pattern-cross-dots-md bg-[#e7bf97] text-[#100D3F]">
      <LoginForm />
    </section>
  );
};

export default Login;
