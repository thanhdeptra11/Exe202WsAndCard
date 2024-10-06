import React from "react";
import posts from "../../database/posts";
import { useParams } from "react-router-dom";
function BlogDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id == id);
  return (
    <section className="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-10 text-left">
      <div className="blog-header">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-4xl text-dark mb-5">{post.title}</h1>
        <p className="text-gray-700 font-thin text-sm">20/10/2002</p>
        <div className="clear-both border-b border-solid border-[#ddd] h-[2px] mb-[5px] pt-[2px]">&nbsp;</div>
      </div>
      <div className="blog-content">
        {post.paragraphs.map((part, i) => (
          <>
            {post.headings[i] && <h3 className="font-semibold text-xl text-black mb-6">{post.headings[i]}</h3>}
            {post.images[i] && (
              <div className="my-8 flex justify-center">
                <img src={post.images[i]} className="w-full max-w-[640px] h-auto" />
              </div>
            )}
            {part && <p>{part}</p>}
            <br />
          </>
        ))}
      </div>
    </section>
  );
}

export default BlogDetail;
