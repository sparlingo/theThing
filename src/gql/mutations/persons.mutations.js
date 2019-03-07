import gql from 'graphql-tag'

export const createPerson = gql`
  mutation CreatePerson($name: String!) {
    createPerson(name: $name) {
      id
      name
    }
  }
`;

