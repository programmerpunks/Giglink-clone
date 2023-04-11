import { TiTickOutline } from "react-icons/ti";


const CarouselCard = ({ url, url2, collection, name, items }) => {
  return (
    <div className="group relative overflow-hidden bg-slate-900 rounded-lg p-3 shadow shadow-gray-800 ease-in-out duration-500 m-2 w-[330px]">
      <img src={url} className="rounded-lg" alt="" />
      <div className="relative p-4 -mt-14">
        <div className="relative inline-block">
          <img
            src={url2}
            className="h-16 rounded-md shadow-md shadow-gray-800"
            alt=""
          />
          <i className=" text-emerald-600 text-2xl absolute -bottom-3 -right-2">
            <TiTickOutline />
          </i>
        </div>

        <div className="mt-3">
          <a
            href="/"
            className="font-semibold block text-[18px] text-white hover:text-violet-600"
          >
            {collection}
          </a>
          <span className="text-slate-400 mt-1 text-sm">
            <span className="italic">by</span>{" "}
            <a href="/" className="text-violet-600 font-medium">
              {name}{" "}
            </a>
          </span>
          <span className="text-slate-400 block text-[16px] mt-1">
            {items} items
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
