export function create(args, { models, pubsub }) {
  return models.Person.create(args)
}

export function findAll(args, { models }) {
  return models.Person.find()
}