
import OgranisateurRegisterForm from "../../../../components/register/r-organisateur/organisateur-register_form.component";
import OrganisateurRegisterSideContent from "../../../../components/register/r-organisateur/organisateur-register_side_content.component";

import "./organisateur-register.page.css";


const OrganisateurRegisterPage: React.FC = () => { 
    return (
        <div className="min-h-screen h-fit md:flex">
            <OrganisateurRegisterSideContent />
            <OgranisateurRegisterForm />
        </div>
    );
}

export default OrganisateurRegisterPage;