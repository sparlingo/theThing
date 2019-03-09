// load .env content into process.env
require('dotenv').config()

import "@babel/polyfill";
import mongoose from 'mongoose'
import { resolve } from 'path'
import { mergeTypes, fileLoader } from 'merge-graphql-schemas';
import { ApolloServer, gql } from 'apollo-server'

import pubsub from './pubsub'
import resolvers from './resolvers'
import Person from './models/person.model'

const apolloOptions = {
  typeDefs: gql(mergeTypes(fileLoader(resolve(__dirname, './schema')))),
  resolvers,
  context: () => ({
    pubsub,
    models: {
      Person,
    },
  })
}

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    return new ApolloServer(apolloOptions).listen(
      parseInt(process.env.SERVER_PORT)
    )
  })
  .then(({ url, subscriptionsUrl }) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
  })