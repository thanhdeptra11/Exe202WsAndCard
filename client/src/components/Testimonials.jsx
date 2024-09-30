import React from 'react'

function Testimonials() {
  return (
    <section className="mt-32 max-md:mt-10">
      <h2 className="flex justify-center text-lg font-medium text-orange-400">Testimonials</h2>
      <h3 className="flex justify-center text-4xl font-bold text-black">Hàng Trăm Món Ăn & Cửa Hàng</h3>
      <div className="mt-14 w-full max-w-[1586px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow text-black max-md:mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa9ffe200f24eeffa08f86dd76182dcb08f61649090d1060673cc37649a6a37?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
                alt=""
                className="object-contain z-10 shrink-0 my-auto mr-0 aspect-square w-[92px]"
              />
              <div className="flex flex-col px-14 py-32 bg-white shadow-2xl rounded-[35px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                <div className="flex gap-4 self-center max-w-full w-[229px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/83e29b10dd2040287cd5b6f3ba2f8f0ff59c692b319e33d75624a74a151de391?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
                    alt="Client"
                    className="object-contain shrink-0 aspect-square w-[76px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="text-lg font-semibold">Willians Jhone</div>
                    <div className="self-start text-sm">CEO & Co-Founder</div>
                  </div>
                </div>
                <p className="mt-11 text-lg font-medium text-center max-md:mt-10 max-md:max-w-full">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst
                  blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque
                  ultrices nunc, dolor egestas mus."
                </p>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f60127c966c8f3c0be80e7978b183d22a5e8a272c6276fe0109efcd854208076?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
                alt=""
                className="object-contain shrink-0 self-start mt-44 aspect-square w-[92px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e4aacc0a3b65e481ac5cc1b9b281faecd1151e1799df0cf6af591a299a91a46?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
              alt="Testimonial illustration"
              className="object-contain grow w-full aspect-[1.69] max-md:mt-5 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
