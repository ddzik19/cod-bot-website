import React from "react";
import Header from "../components/header";
const Faq = () => {
  const faqs = [
    {
      q: "How often are the gun builds updated?",
      a: "We try to update the gun builds at least once a week, preferrably every friday.",
    },
    {
      q: "Where do you find the gun builds?",
      a: "We follow Call of Duty pro's and content creators to stay up to date on what builds are currently meta.",
    },
  ];
  return (
    <div className="md:px-[2%] lg:px-[18%]">
      <div className="flex items-center justify-center">
        <div className="container flex flex-col justify-center py-8 md:p-8">
          <Header children={"FAQ"} />
          <div className="space-y-4">
            {faqs.map((element) => {
              return (
                <details className="w-full bg-[#323443] rounded-lg text-[#ffa100] shadow-lg hover:cursor-pointer">
                  <summary className="color-#ffa100 px-4 py-6">
                    {element.q}
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                    {element.a}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
