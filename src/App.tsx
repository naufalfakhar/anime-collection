import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Routes from '@/routes'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
