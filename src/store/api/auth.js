import { GraphQLClient } from 'graphql-request'
// import gql from 'graphql-tag'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cja29wrui3kek01571mxxfexh', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
  }
})

function authUser (email, password) {
  const queryUser = `
    mutation authenticateUser($email: String!, $password: String!) {
      authenticateUser(email: $email, password: $password) {
        id
        token
      }
    }
  `

  return client.request(queryUser, {email: email, password: password})
}

function signUpUser (userName, email, password) {
  const createUser = `
  mutation signUpUser($userName: String!, $email: String!, $password: String!){
    signupUser(userName: $userName, email: $email, password: $password){
      id
    }
  }
  `

  return client.request(createUser, {userName: userName, email: email, password: password})
}

const api = {
  authUser: authUser,
  signUpUser: signUpUser
}

export default api
