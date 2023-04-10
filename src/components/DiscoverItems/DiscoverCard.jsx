import React from 'react'

const DiscoverCard = ({url,url2,Profile,details,bid}) => {
  return (
    <div>
       <div className="group relative overflow-hidden p-2 rounded-lg bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
          <div className="relative overflow-hidden">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={url}
                className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                alt=""
              />
            </div>

            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
              <a
                href="item-detail.html"
                className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white p-2"
              >
                 Buy Now
              </a>
            </div>

            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <a
                href="/"
                className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
              >
                <i className="mdi mdi-plus"></i>
              </a>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-center">
              <img
                src={url2}
                className="rounded-full h-8 w-8"
                alt=""
              />
              <a
                href="creator-profile.html"
                className="ml-2 text-[15px] font-medium text-slate-400 hover:text-violet-600"
              >
                {Profile}
              </a>
            </div>

            <div className="my-3">
              <a
                href="item-detail.html"
                className="font-semibold hover:text-violet-600"
              >
                {details}
              </a>
            </div>

            <div className="flex justify-between p-2bg-slate-800 rounded-lg shadow shadow-gray-700 p-2">
              <div>
                <span className="text-[16px] font-medium text-slate-400 block">
                  Price
                </span>
                <span className="text-[16px] font-semibold block">
                  <i className="mdi mdi-ethereum"></i> 3.5 ETH
                </span>
              </div>

              <div>
                <span className="text-[16px] font-medium text-slate-400 block">
                  Highest Bid
                </span>
                <span className="text-[16px] font-semibold block">
                  <i className="mdi mdi-ethereum"></i> 3.55 ETH
                </span>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default DiscoverCard
