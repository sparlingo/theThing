<template>
  <div class="container">
    <ul v-if="persons && persons.length > 0">
      <li
        v-for="person in persons"
        :key="person.id"
      >
        {{person.name}}
      </li>
    </ul>
    <h4 v-else>No persons, please add one using playground</h4>
    <input v-model="person.name" placeholder="Person"/>
    <button @click="handleCreatePerson">Create Person</button>
  </div>
</template>

<script>
import { PERSONS } from '@/gql/queries/persons.queries'
import { PERSON_CREATED } from '@/gql/subscriptions/persons.subscriptions'
import { createPerson } from '@/gql/mutations/persons.mutations'

export default {
  apollo: {
    persons: {
      query: PERSONS,
      subscribeToMore: {
        document: PERSON_CREATED,
        updateQuery: (previousResult, { subscriptionData }) => {
          return {
            persons: [
              ...previousResult.persons,
              subscriptionData.data.personCreated
            ]
          }
        },
      }
    }
  },
  
  methods: {
    handleCreatePerson() {
      this.$apollo.mutate({
        mutation: createPerson,
        variables: {
          name: this.person.name
        }
      })
    }
  },

  data: () => ({
    person: {
      name: ''
    }
  })
}
</script>

<style scoped>
  .container {
    width: 80%;
    min-height: 100vh;
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }

  .game-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
  }

  .game {
    display: flex;
  }
</style>