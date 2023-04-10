import React from "react";
import DiscoverCard from "./DiscoverCard";
import { Data } from "../../assets/DiscoverItems/Content/index";
const DiscoverMain = () => {
  return (
    <div>
      <div className="grid grid-cols-1 text-center">
        <h3 className="md:text-[30px] text-[26px] font-semibold">Discover Items</h3>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
      {Data.map((card, index) => {
            return (
              <DiscoverCard
                key={index}
                url={card.url}
                url2={card.url2}
                Profile={card.comicName}
                name={card.name}
                items={card.items}
              />
            );
          })}
        </div>

      <div className="grid grid-cols-1 mt-6">
        <div className="text-center">
          <a
            href="explore-one.html"
            className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out"
          >
            Explore More <i className="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMain;
