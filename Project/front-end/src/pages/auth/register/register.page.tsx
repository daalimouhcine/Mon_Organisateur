
import RegisterForm from "../../../components/register/register_form.component";
import RegisterSideContent from "../../../components/register/register_side_content.component";

import "./register.page.css";


const Register: React.FC = () => { 
    return (
        <div className="h-screen md:flex">
            <RegisterForm />
            <RegisterSideContent />
        </div>
    );
}

export default Register;