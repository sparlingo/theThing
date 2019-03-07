import pubsub from '../pubsub'
import * as PersonApi from '../api/person.api'

export default {
  Query: {
    persons: (parent, args, context) => PersonApi.findAll(args, context)
  },

  Mutation: {
    createPerson: async (parent, args, context) => {
      const person = await PersonApi.create(args, context)

      pubsub.publish('personCreated', {
        personCreated: person
      })

      return person
    }
  },

  Subscription: {
    personCreated: {
      subscribe: () => pubsub.asyncIterator('personCreated'),
    },
  },
}