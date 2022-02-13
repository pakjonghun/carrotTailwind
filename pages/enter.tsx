import { useState } from "react";

const cls = (...args: string[]) => {
  console.log(args);
  const r = args.join(" ");
  console.log(r);
  return args.join(" ");
};

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className="flex flex-col items-center pt-14 space-y-10">
      <h3 className="font-bold text-2xl">Enter to Carrot</h3>
      <div className="w-full">
        <div>
          <h5 className="text-center mb-5 font-medium">Enter using</h5>
          <div className="flex justify-between mb-5 border-b-[1px]">
            <button
              onClick={onEmailClick}
              className={cls(
                "font-medium w-full mx-auto py-3 z-10 border-b-2 transition-colors duration-100",
                method === "email"
                  ? "border-orange-400 text-orange-400"
                  : "border-transparent text-gray-400"
              )}
            >
              Email
            </button>
            <button
              onClick={onPhoneClick}
              className={cls(
                "font-medium w-full mx-auto py-3 z-10 border-b-2 transition-colors duration-100",
                method === "phone"
                  ? "border-orange-400 text-orange-400"
                  : "border-transparent text-gray-400"
              )}
            >
              Phone
            </button>
          </div>
        </div>
        <form className="flex flex-col px-3">
          <label
            className="text-sm"
            htmlFor={method === "email" ? "email" : "phone"}
          >
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null}
          </label>
          <div>
            {method === "email" ? (
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 mb-3 border-[1px] border-gray-300 shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-500 appearance-none"
              />
            ) : null}
            {method === "phone" ? (
              // <div className="relative w-full px-3 py-1 mb-3 border-[1px] border-gray-300 shadow-md rounded-md focus:outline-none focus-within:ring-1 focus-within:ring-orange-400 focus-within:border-orange-500">
              //   <span className="absolute left-3 top-1/2 -translate-y-1/2 select-none">
              //     +82
              //   </span>
              //   <input
              //     type="number"
              //     required
              //     className="w-full h-full p-0 pl-8 border-none focus:ring-0 appearance-none"
              //   />
              // </div>
              <div className="flex mb-3">
                <span className="flex items-center px-2 bg-gray-50 rounded-l-md border-[1px] border-r-0 border-gray-300">
                  +82
                </span>
                <input
                  id="phone"
                  type="number"
                  required
                  className="w-full px-3 py-2 border-[1px] border-gray-300  rounded-l-none shadow-md rounded-md focus:outline-none focus-within:ring-1 focus-within:ring-orange-400 focus-within:border-orange-500"
                />
              </div>
            ) : null}
          </div>
          <button className="w-full py-1 font-medium text-orange-200 bg-orange-400 border-transparent rounded-md shadow-md hover:bg-orange-600 hover:text-orange-100 active:text-black active:bg-orange-400 transition-colors duration-100">
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>
        <div>
          <div>
            <div />
            {/* <div className="flex items-center px-3 my-5 justify-center mb-5bg-blue-500 space-x-1">
              <div className="h-[3px] w-full bg-gray-100" />
              <span className="whitespace-nowrap text-center text-sm text-gray-300">
                Or enter with
              </span>
              <div className="h-[3px] w-full bg-gray-100" />
            </div> */}
            {/* <div className="relative my-5 mx-3 border-t-2">
              <span className="absolute left-1/2 top-0 px-2 bg-white -translate-y-1/2 -translate-x-1/2">
                Or enter with
              </span>
            </div> */}
            <div className="relative my-6">
              <div className="absolute w-full border-t-2 mx-3 border-gray-300" />
              <div className="relative -top-3 text-center">
                <span className="bg-white px-2 text-sm text-gray-400">
                  Or enter with
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mx-3">
            <button className="flex justify-center items-center w-full py-1 border-2 rounded-md hover:bg-gray-50 active:bg-white transition-colors duration-100">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="flex justify-center items-center w-full py-1 border-2 rounded-md hover:bg-gray-50 active:bg-white transition-colors duration-100">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
