import FaqSide from "../../components/contact/faq/faq_side.component";
import FaqQuestions from "../../components/contact/faq/faq_questions.component";
import ContactForm from "../../components/contact/contact_form/contact_form.component";
import ContactContent from "../../components/contact/contact_form/contact_content.component";

import "./contact.page.css";

const Contact: React.FC = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="flex flex-col-reverse items-center px-10 mx-auto lg:flex-row max-w-7xl">
            <FaqSide />
            <FaqQuestions />
        </div>
      </section>
      <>
        <ContactContent />
        <ContactForm />
      </>
    </>
  );
};

export default Contact;
