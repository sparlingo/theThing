import * as pollService from '../services/poll.service'

export default {
  queries: {},

  mutations: {
    createPoll(parent, args) {
      return pollService.create(args.poll).catch()
    }
  },

  subscriptions: {}
}