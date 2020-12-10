const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const {createSql} = require('./sqldatabase');
const WTFAPI = require('./WTFAPI');

const store = createSql();

store.db.sync({
  force: false,
});




const wtfAPI = new WTFAPI({ store });


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    wtfAPI: wtfAPI,
  }),
});


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
