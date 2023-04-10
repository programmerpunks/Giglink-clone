import CarouselCard from "./CarouselCard";
import { Carousel } from "antd";

import { Data } from "../../assets/Collections/Content/index";

const Collection = () => {
  return (
    <div id="collection" className="my-20">
      <p className="text-center text-4xl">Top collections</p>
      <div className="">
        <Carousel
          autoplay={true}
          pauseOnHover={false}
          variableWidth={true}
          autoplaySpeed={0}
          dots={false}
          speed={2000}
          className="py-5"
        >
          {Data.map((card, index) => {
            return (
              <CarouselCard
                key={index}
                url={card.url}
                url2={card.url2}
                collection={card.collection}
                name={card.name}
                items={card.items}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Collection;
