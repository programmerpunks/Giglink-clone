import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineUserAdd } from "react-icons/ai";


const CreatorCard = ({url, name, handle}) => {
  return (
    <div>
      <div className="flex justify-between items-center p-3 rounded-md bg-slate-900 shadow dark:shadow-gray-800">
            <div className="flex items-center">
              <div className="relative inline-block">
                <img
                  src={url}
                  className="h-16 rounded-md"
                  alt=""
                />
                <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -right-2"> <TiTickOutline/></i>
              </div>

              <div className="ml-3">
                <a
                  href="creator-profile.html"
                  className="font-semibold block hover:text-violet-600"
                >
                  {name}
                </a>
                <span className="text-slate-400 text-sm block mt-0.5">
                  {handle}
                </span>
              </div>
            </div>

            <a
              href="/"
              className="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"
            >
              <i className="uil uil-user-plus text-[20px]"><AiOutlineUserAdd/></i>
            </a>
          </div>
    </div>
  )
}

export default CreatorCard
