import React from 'react'

function Newsletter() {
  return (
    <section className="px-16 mt-44 max-w-full bg-black rounded-[50px] w-[1560px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fce7ea4cde6506653c9a0d6bbc4b875ce1b457da00a82f399db332d6687c55d?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
            alt="Newsletter illustration"
            className="object-contain self-stretch my-auto w-full aspect-[1.09] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-lg max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-bold text-white max-md:mr-2.5 max-md:max-w-full">
              Subscribe To Our Newsletter
            </h2>
            <p className="mt-4 font-medium text-white max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus mauris sem sed urna venenatis vivamus.
              Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.
            </p>
            <form className="flex flex-wrap gap-5 justify-between py-3 pr-3 pl-9 mt-7 max-w-full bg-white rounded-2xl w-[526px] max-md:pl-5 max-md:mr-0.5">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type your email....."
                className="my-auto font-medium text-zinc-400 bg-transparent border-none focus:outline-none"
              />
              <button
                type="submit"
                className="px-7 py-3.5 font-semibold text-white whitespace-nowrap bg-orange-400 rounded-2xl hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 max-md:px-5"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
