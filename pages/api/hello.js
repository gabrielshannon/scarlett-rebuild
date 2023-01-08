// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */




export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://scarlettdata.online/graphql",
    }),
    cache: new InMemoryCache(),
  });
}