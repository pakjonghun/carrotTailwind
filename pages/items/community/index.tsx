import React from "react";

const Community = () => {
  return (
    <div className="pt-10 px-5 space-y-10">
      <div className="flex flex-col">
        <span className="w-fit px-2 py-1 mb-5 font-medium text-sm bg-gray-100 rounded-full">
          동네질문
        </span>
        <span className="cursor-pointer">
          <span className="text-orange-500 mr-1">Q.</span> What is the best
          mandu restaurant?
        </span>
        <div className="flex justify-between mt-5 pb-3 text-sm border-b text-gray-400">
          <span>니꼬</span>
          <span>18시간 전</span>
        </div>
        <div className="flex py-2 space-x-3 border-b-2">
          <span className="flex items-center space-x-1 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex items-center space-x-1 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
      </div>
      <button className="fixed left-10 bottom-10 p-3 text-white rounded-full bg-orange-400 hover:bg-orange-500 active:bg-orange-400 ">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Community;
