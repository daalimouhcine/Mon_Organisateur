import ClientRegisterForm from "../../../../components/register/r-client/client-register_form.component";

import "./client-register.page.css";

const ClientRegisterPage: React.FC = () => {
  return (
    <div className="h-screen md:flex">
      <ClientRegisterForm />
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={require("src/common/images/client_register.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default ClientRegisterPage;
