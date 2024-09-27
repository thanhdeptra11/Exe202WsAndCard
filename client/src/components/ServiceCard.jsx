import React from 'react'

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-center px-14 py-24 w-full bg-white border border-solid border-zinc-400 rounded-[35px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex relative flex-col aspect-square w-[98px]">
          <img loading="lazy" src={icon} alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative shrink-0 w-full bg-red-200 rounded-full h-[98px]" />
        </div>
        <h4 className="mt-11 text-2xl font-bold text-black max-md:mt-10">{title}</h4>
        <p className="mt-11 text-lg font-medium text-center text-black max-md:mt-10">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
