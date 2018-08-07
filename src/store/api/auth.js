import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjgjfc3us6w7i0174gjbfa3yh', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
  }
})

function authUser (email) {
  const queryUser = `
  query User($email: String!) {
    User(email: $email) {
      id
      name
    }
  }
  `

  return client.request(queryUser, {email: email})
}

function signUpUser (userName, email, password) {
  const createUser = `
  mutation signUpUser($userName: String!, $email: String!, $password: String!){
    signupUser(name: $userName, email: $email, password: $password){
      id
      name
      email
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
