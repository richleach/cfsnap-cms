import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });
//console.log(req.body)
  const query = gql`
    mutation PublishComment($id: ID!) {
        publishComment(where: {id: $id}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    id: req.body
  });

  return res.status(200).send(result);
}

/* publishComment(where: (id:$id)

publishComment(where : {slug:$slug}) {
  comment
} */