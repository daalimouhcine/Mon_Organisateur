import LoginForm from "../../../components/login/login_form.component";

import "./login.page.css";

//@ts-ignore
const Login: React.FC = ({isAuthed}) => {
  return (
    <section className="h-screen flex pattern-cross-dots-md bg-[#e7bf97] text-[#100D3F]">
      
      {isAuthed}
      <LoginForm />
    </section>
  );
};

export default Login;
