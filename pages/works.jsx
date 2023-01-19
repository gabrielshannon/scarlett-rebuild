import React from 'react';
import { gql } from '@apollo/client';
import { getApolloClient } from './api/hello';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDetectScroll } from '@smakss/react-scroll-direction';

const works = ({ page, posts }) => {
  const [scrollDir] = useDetectScroll({});

  useEffect(() => {
    console.log(scrollDir)
  }, [scrollDir])
  

  return (
    <div>
      <main className="BoldFont">
        <div className="app">
   
        </div>

        <navbar class=
        { scrollDir === 'down' 
        ?  'navbar-work' 
        : 'navbar-work fadeIn'
        }
        >

        {/* <navbar class={ scrollDir === 'still' ? 'navbar-work active' : scrollDir === 'down'  ? 'navbar-work active' : 'navbar-work'}> */}

          <div class="title_option">
            <a href="/">HOME</a>,
          </div>
          <div class="title_option">
            <a href="/works">WORKS</a>,
          </div>
          <div class="title_option">
            <a href="/about">ABOUT</a>,
          </div>

          <div class="title_option">
            <a href="/contact">CONTACT</a>
          </div>
        </navbar>
        <div className="works_grid ">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div
                className={`post_feature_outer ` + post.tags.edges[0].node.name}
              >
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
