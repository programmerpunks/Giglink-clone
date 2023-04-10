import React from "react";
import Data from "../../assets/Creators/Content"
import CreatorCard from "./CreatorCard";
const Creators = () => {

  return (
    <div id="Creators" className="my-20">
      <div class="container md:mt-24 mt-16">
        <div class="grid grid-cols-1 text-center">
          <h3 class="md:text-[30px] text-[26px] font-semibold">
            Best Creators &amp; Sellers
          </h3>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
        {Data.map((card, index) => {
            return (
              <CreatorCard
                key={index}
                url={card.url}
                name={card.name}
                handle={card.handle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Creators;
