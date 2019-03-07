import gql from 'graphql-tag'

export const createPerson = gql`
  mutation CreatePerson($person: ID!) {
    createPerson(person: $person) {
      id
      name
    }
  }
`;

