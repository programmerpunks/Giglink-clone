import React from "react";
import { faqs } from "../../assets/QnA/Content";

const QnA = () => {
  return (
    <div id="FAQ" className="py-10">
      <div class="grid grid-cols-1 text-center my-16">
        <h3 class="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
          Q&amp;A
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
          We are a huge marketplace dedicated to connecting great artists of all
          Giglink with their fans and unique token collectors!
        </p>
      </div>
      <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] text-white border rounded-md border-gray-600 p-2">
        {faqs.map((item) => {
          return (
            <details key={item.id}>
              <summary className="flex items-center">
                <div className="accordion-item flex w-full flex-wrap">
                  <div className="font-Glacial leading-[30px] cursor-pointer w-full">
                    <div
                      className={`flex border-gray-600 mb-4 justify-between ${
                        item.id !== 1 ? "border-t" : ""
                      }`}
                    >
                      <div className="flex p-2 md:h-[65px] w-full items-center justify-start rounded-[4px] border-[#726f6f]">
                        <span className="font-Glacial text-md sm:text-base md:text-lg font-bold">
                          {item.question}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </summary>
              <div className=" leading-normal w-full text-md lg:text-base text-gray-300 p-2">
                {item.answer}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default QnA;
