import React from 'react'

function WorkStep({ title, description, image, index }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-12 text-black max-md:mt-10">
        {index % 2 === 0 ? (
          <img loading="lazy" src={image} alt="" className="object-contain w-full aspect-[1.72]" />
        ) : null}
        <h4 className={`self-${index === 1 ? 'center' : 'start'} mt-11 text-2xl font-bold max-md:mt-10`}>{title}</h4>
        <p className={`mt-6 text-lg font-medium ${index === 2 ? 'text-right' : ''}`}>{description}</p>
        {index % 2 !== 0 ? (
          <img
            loading="lazy"
            src={image}
            alt=""
            className={`object-contain ${
              index === 1 ? 'mx-6' : ''
            } mt-11 w-full aspect-[1.49] max-md:mx-2.5 max-md:mt-10`}
          />
        ) : null}
      </div>
    </div>
  )
}

export default WorkStep
