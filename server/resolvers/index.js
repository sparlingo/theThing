import personResolvers from './person.resolvers'
import pollResolvers from './poll.resolvers'

export default {
  Query: {
    ...personResolvers.queries,
    ...pollResolvers.queries
  },

  Mutation: {
    ...personResolvers.mutations,
    ...pollResolvers.mutations
  },

  Subscription: {
    ...personResolvers.subscriptions,
    ...pollResolvers.subscriptions
  },
}