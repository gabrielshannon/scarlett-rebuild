import Head from 'next/head';
import Link from 'next/link';
import { gql } from '@apollo/client';

import { getApolloClient } from '../api/hello';

import styles from '../../styles/Home.module.css';

export default function Post({ post, site }) {
  const { date, title, content, author, categories } = post;
  return (
    <article className='post-article'>
    <h3>{title}</h3>

    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />

  </article>
    // <div className="bg-[#141414]">
    
    //   <Head>
    //     <title>{post.title}</title>
    //     <meta
    //       name="description"
    //       content={`Read more about ${post.title} on ${site.title}`}
    //     />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className='post-feature'>
    //     <h1>{post.title}</h1>
    //       <div className='post-feature-inner'
    //         dangerouslySetInnerHTML={{
    //           __html: post.content,
    //         }}
    //       />
    //     <p>
    //       <Link href="/">
    //         {/* <a> */}
    //         &lt; GO BACK
    //         {/* </a> */}
    //       </Link>
    //     </p>
    //   </main>
    // </div>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($slug: String!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
        }
      }
    `,
    variables: {
      slug: postSlug,
    },
  });

  const post = data?.data.postBy;

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  const site = {
    ...data?.data.generalSettings,
  };

  return {
    props: {
      post,
      site,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
