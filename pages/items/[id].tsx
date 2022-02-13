import React from "react";

const ItemDetail = () => {
  return (
    <div className="p-3">
      <div>
        <div className="w-full aspect-square mb-5 bg-slate-200 rounded-sm shadow-sm" />
        <div className="flex space-x-3 pb-5 mb-5 border-b">
          <div className="w-12 aspect-square bg-slate-200 shadow-sm rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-500 cursor-pointer">
              Steve Jebs
            </p>
            <p className="text-xs font-medium text-gray-400 cursor-pointer">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-3 text-3xl text-gray-900 font-bold">Galaxy S50</h1>
          <p className="text-3xl text-gray-900">$140</p>
          <p className="text-base mb-9">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between">
            <button className="flex-1 mr-5 py-2 px-3 font-medium text-white bg-orange-400 hover:bg-orange-500 active:bg-orange-400 rounded-md shadow-md">
              Talk to seller
            </button>
            <button className="p-2 rounded-lg text-gray-200 hover:bg-slate-50 hover:">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-9 mb-5">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="w-full aspect-square mb-5 bg-slate-200 rounded-sm shadow-sm" />
              <h3 className="text-gray-400">Galaxy S60</h3>
              <p className="text-sm">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
