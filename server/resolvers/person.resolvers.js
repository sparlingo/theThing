import pubsub from '../pubsub'
import * as PersonApi from '../services/person.service'

export default {
  queries: {
    people: () => PersonApi.findAll()
  },

  mutations: {
    createPerson: async (parent, args) => {
      const person = await PersonApi.create(args)

      pubsub.publish('personCreated', {
        personCreated: person
      })

      return person
    }
  },

  subscriptions: {
    personCreated: {
      subscribe: () => pubsub.asyncIterator('personCreated'),
    },
  },
}