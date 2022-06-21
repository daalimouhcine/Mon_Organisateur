import FaqSide from "../../components/contact/faq/faq_side.component";
import FaqQuestions from "../../components/contact/faq/faq_questions.component";
import ContactForm from "../../components/contact/contact_form/contact_form.component";
import CSS from 'csstype';

import "./contact.page.css";

const style: CSS.Properties = {
  backgroundImage: `url(${'https://cdn.devdojo.com/images/february2021/directory-bg.jpg'})`,
 }

const Contact: React.FC = () => {
  return (
    <>
      <section
        className="relative"
        style={style}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30"></div>

        <div className="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32">
          <div className="flex flex-wrap text-white">
            <div className="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">
              <h1 className="mt-0 mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                Contactez-Nous
              </h1>
              <p className="mt-0 mb-4 text-base text-white sm:text-lg lg:text-xl">
              Service dont vous serez honoré.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-auto p-6 mx-auto space-y-3 overflow-hidden transform -translate-y-12 bg-white rounded-lg shadow-md  lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3 flex flex-col-reverse items-center px-10 max-w-7xl">
        <FaqSide />
        <FaqQuestions />
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
