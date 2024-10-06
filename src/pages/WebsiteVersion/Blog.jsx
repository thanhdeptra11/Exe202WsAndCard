import React from "react";

const Blog = () => {
  const sampleData = [
    {
      id: 1,
      authorName: "Jane Doe",
      avatarURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=Liliana",
      content: "This is the content of the first blog post.",
      date: "October 5, 2024",
      link: "https://example.com/blog1",
      bannerURL: "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg",
    },
    {
      id: 2,
      authorName: "John Smith",
      avatarURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=Leah",
      content: "This is the content of the second blog post.",
      date: "October 4, 2024",
      link: "https://example.com/blog2",
      bannerURL: "https://st2.depositphotos.com/1350793/9161/i/450/depositphotos_91612518-stock-photo-blog-concept-with-man-holding.jpg",
    },
    // Add more blog posts as needed
  ];

  return (
    <>
      <div className="p-5 pt-8 ignore not-prose dark:border-gray-800 relative  dark:bg-gray-800">
        <div className="absolute w-auto rounded-b-lg border-b uppercase -translate-y-px tracking-wide leading-none border-l border-r border-gray-200 dark:border-gray-800 shadow-sm top-0 left-1/2 -translate-x-1/2 px-3 pt-1 pb-2 bg-white dark:bg-black text-gray-400 text-[0.65rem]">
          🤩 Our Amazing Blogs 👇
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 not-prose">
            {sampleData.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group"
              >
                {/* <span className="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span> */}

                <img src={post.bannerURL} alt="Banner" className="relative w-full h-32 object-cover rounded-md mb-4" />

                <div className="flex items-center justify-start w-full mb-4">
                  <img src={post.avatarURL} alt={post.authorName} className="relative h-8 w-8 rounded-full mr-2" />
                  <div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{post.authorName}</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                  </div>
                </div>

                <span className="relative text-sm md:text-base text-gray-600 dark:text-gray-400">{post.content}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
