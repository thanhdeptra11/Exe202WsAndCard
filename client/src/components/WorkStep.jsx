import React from 'react';

function WorkStep({ title, description, image, index }) {
  return (
    <div className="flex flex-col w-[33%] max-md:w-full">
      <div className={`flex flex-col grow mt-12 text-black max-md:mt-10 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
        {/* Image first if index is even */}
        {index % 2 === 0 ? (
          <img
            loading="lazy"
            src={image}
            alt=""
            className="object-contain w-full aspect-[1.72] max-md:mt-5"
          />
        ) : null}

        {/* Title */}
        <h4 className={`mt-11 text-2xl text-red-400 font-bold max-md:mt-10 ${index % 2 === 0 ? 'self-start' : 'self-end'} max-md:self-center`}>
          {title}
        </h4>

        {/* Description */}
        <p className={`mt-6 text-lg font-medium ${index % 2 === 0 ? 'text-left' : 'text-right'} max-md:text-center`}>
          {description}
        </p>

        {/* Image last if index is odd */}
        {index % 2 !== 0 ? (
          <img
            loading="lazy"
            src={image}
            alt=""
            className={`object-contain mt-11 w-full aspect-[1.49] max-md:mt-5 max-md:w-full`}
          />
        ) : null}
      </div>
    </div>
  );
}

export default WorkStep;
