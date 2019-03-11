<template>
  <div class="container">
    <ul v-if="people && people.length > 0">
      <li
        v-for="person in people"
        :key="person.id"
      >
        {{person.name}}
      </li>
    </ul>
    <h4 v-else>No people, please add one using playground</h4>
    <input v-model="person.name" placeholder="Person"/>
    <button @click="handleCreatePerson">Create Person</button>
  </div>
</template>

<script>
import { PEOPLE } from '@/gql/queries/person.queries'
import { PERSON_CREATED } from '@/gql/subscriptions/person.subscriptions'
import { createPerson } from '@/gql/mutations/person.mutations'

export default {
  apollo: {
    people: {
      query: PEOPLE,
      subscribeToMore: {
        document: PERSON_CREATED,
        updateQuery: (previousResult, { subscriptionData }) => {
          return {
            people: [
              ...previousResult.people,
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
</style>