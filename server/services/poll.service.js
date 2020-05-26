import Poll from '../models/poll.model'

export function create(data) {
  return Poll.create(data)
}