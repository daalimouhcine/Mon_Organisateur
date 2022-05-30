
import ClientRegisterForm from "../../../../components/register/r-client/cilent-register_form.component";
import ClientRegisterSideContent from "../../../../components/register/r-client/client-register_side_content.component";

import "./client-register.page.css";


const ClientRegisterPage: React.FC = () => { 
    return (
        <div className="h-screen md:flex">
            <ClientRegisterForm />
            <ClientRegisterSideContent />
        </div>
    );
}

export default ClientRegisterPage;