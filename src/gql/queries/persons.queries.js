import gql from 'graphql-tag'

export const PERSONS = gql`
  query Persons {
    persons {
      id
      name
    }
  }
`