import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cja29wrui3kek01571mxxfexh', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
  }
})

function allUsers () {
  return client.request(`
    {
      allUsers(){
        name
      }
    }
  `)
}

function login () {
  return client.request(`
    {
      allUsers(){
        name
      }
    }
  `)
}

function signUp () {
  return client.request(`
    {
      allUsers(){
        name
      }
    }
  `)
}

export {allUsers, login, signUp}
