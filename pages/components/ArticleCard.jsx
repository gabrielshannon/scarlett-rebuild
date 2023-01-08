/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-mixed-operators */
import React from 'react';
import Link from 'next/link';

const ArticleCard = ({ posts }) => (

  
  <div>
    <main className="BoldFont">

      <div className="p-2 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {posts && posts.length > 0 && posts.map((post) => (
          <div className="p-4 flex items-center justify-center">
 
            <Link href={post.path}>
{/* 
              <a  href={post.path}> */}
                <div className="relative w-[25rem] h-[25rem]  md:w-[20rem] md:h-[20rem]  hover:-translate-y-2 transition-transform ease-in-out cursor-pointer">

                  <div className="absolute flex justify-center items-center z-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">

                    <h1 className="text-2xl scarFontBold whitespace-nowrap text-white pointer-events-none">{post.title}</h1>
                  </div>
                  <div>

                    <div
                      className="rounded-md"
                    >
                      <img
                        className="object-cover w-[25rem] h-[25rem] md:w-[20rem] md:h-[20rem] rounded-sm hover:blur-sm "
                        src={post.featuredImage.node.mediaItemUrl}
                      />
                    </div>
                  </div>

                </div>
              {/* </a> */}
            </Link>
            {/* <div dangerouslySetInnerHTML={{
                __html: post.excerpt,
              }} */}

            {/* </li> */}
            </div>

        ))}
        {!posts || posts.length === 0 && (
          <li>
              <p>Oops, no posts found!</p>
          </li>
        )}
      </div>
    </main>
  </div>
);

export default ArticleCard;
