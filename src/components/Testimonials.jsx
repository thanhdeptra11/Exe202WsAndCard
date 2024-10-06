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


// import React from "react";
//
// const Blog = () => {
//   const sampleData = [
//     {
//       id: 1,
//       name: "Salvador Rose",
//       avatarURL: "https://randomuser.me/api/portraits/men/51.jpg",
//       username: "@Salvador",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       blogLink: "#",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       avatarURL: "https://randomuser.me/api/portraits/men/34.jpg",
//       username: "@John",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       blogLink: "#",
//     },
//     {
//       id: 3,
//       name: "Mike Tyson",
//       avatarURL: "https://randomuser.me/api/portraits/men/78.jpg",
//       username: "@Mike",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       blogLink: "#",
//     },
//     {
//       id: 4,
//       name: "Sia",
//       avatarURL: "https://randomuser.me/api/portraits/women/51.jpg",
//       username: "@Sia",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       blogLink: "#",
//     },
//     {
//       id: 5,
//       name: "Cheung",
//       avatarURL: "https://randomuser.me/api/portraits/men/34.jpg",
//       username: "@Cheung",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       blogLink: "#",
//     },
//     {
//       id: 6,
//       name: "Kendra",
//       avatarURL: "https://randomuser.me/api/portraits/women/8.jpg",
//       username: "@Kendra",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       blogLink: "#",
//     },
//     {
//       id: 7,
//       name: "King",
//       avatarURL: "https://randomuser.me/api/portraits/men/5.jpg",
//       username: "@King",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       blogLink: "#",
//     },
//     {
//       id: 8,
//       name: "Yoda",
//       avatarURL: "https://randomuser.me/api/portraits/men/50.jpg",
//       username: "@Yoda",
//       content:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       blogLink: "#",
//     },
//   ];
//
//   return (
//       <div className="container mx-auto max-w-6xl p-4">
//         <h3 className="text-gray-800 py-6 text-3xl text-center font-bold">
//           Popular Blogs
//         </h3>
//         <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
//           {sampleData.map((blog) => (
//               <div
//                   key={blog.id}
//                   className="animate-in zoom-in duration-200 ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative"
//               >
//                 <div className="flex flex-col break-inside-avoid-page z-0 relative">
//                   <div className="flex justify-between">
//                     <div className="flex space-x-6">
//                       <div className="flex space-x-4 flex-shrink-0 w-52">
//                         <img
//                             src={blog.avatarURL}
//                             className="w-10 h-10 rounded-full"
//                             alt={`${blog.name}'s avatar`}
//                         />
//                         <div>
//                           <div className="font-semibold">{blog.name}</div>
//                           <div className="text-sm">{blog.username}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <a
//                       href={blog.blogLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="whitespace-pre-line break-inside-avoid-page"
//                   >
//                     {blog.content}
//                   </a>
//                 </div>
//               </div>
//           ))}
//         </div>
//       </div>
//   );
// };
//
// export default Blog;
