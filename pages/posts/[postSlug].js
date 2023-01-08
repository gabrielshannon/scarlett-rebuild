import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client';

import { getApolloClient } from '../api/hello';

import styles from '../../styles/Home.module.css'

export default function Post({ post, site }) {
  return (
    <div className="bg-[#141414]">
    
      <Head>
        <title>{ post.title }</title>
        <meta name="description" content={`Read more about ${post.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>
        <div className='max-w-xl p-10 text-center text-gray-50 MainFont'>
          <div className={styles.content} dangerouslySetInnerHTML={{
            __html: post.content
          }} />
          </div>
        </div>



        <p className="text-white p-6 hover:text-red-600 hover:-translate-y-1 ease-in-out">
          <Link href="/">
            {/* <a> */}
              &lt; GO BACK
            {/* </a> */}
          </Link>
        </p>
      </main>
    </div>
  )
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
      slug: postSlug
    }
  });

  const post = data?.data.postBy;

  if ( !post ) {
    return {
      props: {},
      notFound: true
    }
  }

  const site = {
    ...data?.data.generalSettings
  }

  return {
    props: {
      post,
      site
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}