import { useState } from "react";
import type { FAQ } from "../../../models/index";

import "./faq.component.css";

const FaqQuestions: React.FC = () => {
  let [questions, setQuestions] = useState<Array<FAQ>>([
    {
      question: "Where do I go to upgrade my account?",
      answer:
        "You can upgrade your account by visiting The Pro Upgrade Page. You will also gain access to many other applications and sections of the site.",
      status: false,
    },
    {
      question: "How do I use Tails in my project?",
      answer:
        "Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.",
      status: false,
    },
    {
      question: "How long will I have access to Tails?",
      answer:
        "You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a pro account. Paddle for processing payments.",
      status: false,
    },
    {
      question: "What is the license on the pages?",
      answer:
        "You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.",
      status: false,
    },
    {
      question: "What is the refund policy for tails?",
      answer:
        "If you were charged on accident we can issue you a refund, however due to the nature of the product we cannot offer a refund, but you can cancel anytime.",
      status: false,
    },
  ]);

  const toggleQuestion = (index: number) => {
    let newQuestions = [...questions];
    newQuestions[index].status = !newQuestions[index].status;
    setQuestions(newQuestions);
  };

  return (
    <div className="w-full max-w-2xl px-8 pb-24 mx-auto lg:mx-0 lg:w-1/2 lg:pb-0 lg:pl-14 xl:pl-24 lg:pr-4 xl:pr-6">
      <h2 className="mt-0 mb-2 text-3xl font-bold text-green-900 lg:mt-6 md:text-4xl">
        FAQs
      </h2>
      <div className="w-20 h-1 bg-green-400 md:w-24" />
      <div className="relative mt-7">
        {questions.map((question, index) => {
          return (
            <div className="relative overflow-hidden select-none" key={index}>
              <h4
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between py-3 text-lg font-medium text-gray-900 cursor-pointer xl:py-5 sm:text-xl hover:text-green-500"
              >
                <span>{question.question}</span>
                <svg
                  className={`w-6 h-6 text-green-400 transition-all duration-200 ease-out transform rotate-0 fill-current ${
                    question.status && "-rotate-45"
                  } `}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </h4>
              <p
                className={`px-1 pt-0 mt-1 ${ !question.status && "hidden"} text-gray-500 sm:text-lg py-7`}
                // x-transition:enter="transition-all ease-out duration-300"
                // x-transition:enter-start="opacity-0 transform -translate-y-4"
                // x-transition:enter-end="opacity-100 transform -translate-y-0"
                // x-transition:leave="transition-all ease-out hidden duration-200"
                // x-transition:leave-start="opacity-100 transform -translate-y-0"
                // x-transition:leave-end="opacity-0 transform -translate-y-4"
                // x-show="show"
                // x-cloak
              >
                { question.answer }
              </p>
            </div>
          );
        })}

        {/* <div
          x-data="{ show: false }"
          className="relative overflow-hidden select-none"
        >
          <h4
            onClick={() => (setShow = !show)}
            className="flex items-center justify-between py-3 text-lg font-medium text-gray-900 cursor-pointer xl:py-5 sm:text-xl hover:text-green-500"
          >
            <span>What is the refund policy for tails?</span>
            <svg
              className={`w-6 h-6 text-green-400 transition-all duration-200 ease-out transform rotate-0 fill-current ${
                show && "-rotate-45"
              } `}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </h4>
          <p
            className="px-1 pt-0 mt-1 text-gray-500 sm:text-lg py-7"
            x-transition:enter="transition-all ease-out duration-300"
            x-transition:enter-start="opacity-0 transform -translate-y-4"
            x-transition:enter-end="opacity-100 transform -translate-y-0"
            x-transition:leave="transition-all ease-out hidden duration-200"
            x-transition:leave-start="opacity-100 transform -translate-y-0"
            x-transition:leave-end="opacity-0 transform -translate-y-4"
            x-show="show"
            x-cloak
          >
            If you were charged on accident we can issue you a refund; however
            due to the nature of the product we cannot offer a refund, but you
            can cancel anytime.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default FaqQuestions;
