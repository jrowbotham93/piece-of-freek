import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Layout } from "../components";

export default function Index({ ...rest }) {
  return (
    <Layout data={rest}/>
  );
}

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

export async function getStaticProps() {
  const {
    data: { shops, reviews },
  } = await client.query({
    query: gql`
      query {
        shops {
          id
          name
          website
          published_at
          email
          image {
            id
          }
          address
        }
        reviews {
          id
          body
          author
          published_at
          date
          header
        }
      }
    `,
  });

  return {
    props: {
      shops,
      reviews,
    },
  };
}
