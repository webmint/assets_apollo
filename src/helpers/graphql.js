import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
  link: new HttpLink({ uri: 'https://eu1.prisma.sh/jd-4cc5ae/frontend/dev' }),
  cache: new InMemoryCache(),
});
