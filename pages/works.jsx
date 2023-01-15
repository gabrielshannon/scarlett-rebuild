import React from 'react';

import { gql } from '@apollo/client';
import ArticleCard from './components/ArticleCard';
import { getApolloClient } from './api/hello';
import Link from 'next/link';

// const works = ({ page, posts }) => {
//   return (
//     <div>
//       <main className="BoldFont">
//         <div className="works_grid">
//           <div class="post_feature_outer tall">
//             <a href="/posts/test-post-8">
//               <div class="tall">
//                 <h1 class="post_feature_title">Test Post 8</h1>
//                 <img
//                   class="post_feature_img"
//                   src="https://scarlettdata.online/wp-content/uploads/2022/10/1-2-scaled.jpg"
//                 ></img>
//               </div>
//             </a>
//           </div>
//           <div class="post_feature_outer short">
//             <a href="/posts/vouge-shoot">
              
//                 <h1 class="post_feature_title">Vouge Shoot</h1>
//                 <img
//                   class="post_feature_img"
//                   src="https://scarlettdata.online/wp-content/uploads/2022/10/5.jpg"
//                 ></img>
              
//             </a>
//           </div>
//           <div class="post_feature_outer tall">
//             <a href="/posts/test-post-8">
//               <div class="tall">
//                 <h1 class="post_feature_title">Tall</h1>
//                 <img
//                   class="post_feature_img"
//                   src="https://scarlettdata.online/wp-content/uploads/2022/10/1-2-scaled.jpg"
//                 ></img>
//               </div>
//             </a>
//           </div>
//           <div class="post_feature_outer short">
//             <a href="/posts/vouge-shoot">
//               <div class="">
//                 <h1 class="post_feature_title">Short</h1>
//                 <img
//                   class="post_feature_img"
//                   src="https://scarlettdata.online/wp-content/uploads/2022/10/5.jpg"
//                 ></img>
//               </div>
//             </a>
//           </div>
//           <div class="post_feature_outer tall">
//             <a href="/posts/test-post-8">
//               <div class="tall">
//                 <h1 class="post_feature_title">Tall</h1>
//                 <img
//                   class="post_feature_img"
//                   src="https://scarlettdata.online/wp-content/uploads/2022/10/1-2-scaled.jpg"
//                 ></img>
//               </div>
//             </a>
//           </div>
//           <div class="post_feature_outer short">
//             <a href="/posts/vouge-shoot">
//               <div class="">
//                 <h1 class="post_feature_title">Short</h1>
//                 <img
//                   class="post_feature_img"
//                   src="https://scarlettdata.online/wp-content/uploads/2022/10/5.jpg"
//                 ></img>
//               </div>
//             </a>
//           </div>
          
          
//         </div>
//       </main>
//     </div>
//   );
// };

const works = ({ page, posts }) => {
  return (
    <div>
      <main className="BoldFont">
      <p class="works_menu">
                    <a class="title_option" href="/">HOME</a>,
                    <a class="title_option" href="/works">WORKS</a>,
                    <a class="title_option" href="/about">ABOUT</a>,
                    <a class="title_option" href="">CONTACT</a>
        </p>
        <div className="works_grid">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div className={`post_feature_outer ` + post.tags.edges[0].node.name}>
                {console.log(post.tags.edges[0].node.name)}
                <Link href={post.path}>
              
                    <h1 className="post_feature_title">{post.title}</h1>
                    <img
                      className="post_feature_img"
                      src={post.featuredImage.node.mediaItemUrl}
                    />
              
                </Link>
              </div>
            ))}
          {!posts ||
            (posts.length === 0 && (
              <li>
                <p>Oops, no posts found!</p>
              </li>
            ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        generalSettings {
          title
          description
        }

        posts(first: 1000) {
          edges {
            node {
              id
              title
              slug
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              tags {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.posts.edges
    .map(({ node }) => node)
    .map((post) => {
      return {
        ...post,
        path: `/posts/${post.slug}`,
      };
    });

  const page = {
    ...data?.data.generalSettings,
  };

  return {
    props: {
      page,
      posts,
    },
  };
}
export default works;
