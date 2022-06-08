
import ClientRegisterForm from "../../../../components/register/r-client/client-register_form.component";

import "./client-register.page.css";


const ClientRegisterPage: React.FC = () => { 
    return (
        <div className="h-screen md:flex">
            <ClientRegisterForm />
        </div>
    );
}

export default ClientRegisterPage;