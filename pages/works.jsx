import React from 'react'

import { gql } from '@apollo/client';
import ArticleCard from './components/ArticleCard';
import { getApolloClient } from './api/hello';
import Link from 'next/link';


const works = ({ page, posts }) => {
  return (
    <div>
    <main className="BoldFont">

      <div className="works_grid">
        {posts && posts.length > 0 && posts.map((post) => (
          <div className='post_feature_outer'>
 
            <Link href={post.path}>

                    <h1 className="post_feature_title">{post.title}</h1>
                    <img
                        className="post_feature_img"
                        src={post.featuredImage.node.mediaItemUrl}
                      />
            </Link>
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
  )
  
}
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
                excerpt
                title
                slug
                featuredImage {
                  node {
                    mediaItemUrl
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
export default works