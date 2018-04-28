import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjgjfc3us6w7i0174gjbfa3yh', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
  }
})

// getRepo will return a single repo given an ID
function getRepo (repoID) {
  const queryRepo = `
  query Repository($id: ID!) {
    Repository(id: $id){
      name
      createdAt
      updatedAt
      author {
        userName
      }
    }
  }
  `
  return client.request(queryRepo, {id: repoID})
}

// getUserRepos will return multiple repos belonging to a user given an ID
function getUserRepos (userID) {
  const queryRepos = `
    query requestUserRepos($id: ID!){
      User(id: $id) {
        repositories{
          name
          id
        }
      }
    }
  `
  return client.request(queryRepos, {id: userID})
}

function createRepo ({userID, repoName}) {
  const createRepo = `
    mutation createRepository($id: ID!, $name: String!){
      createRepository(
        authorId: $id
        name: $name
      ) {
          name
          id
      }
    }
  `
  return client.request(createRepo, { id: userID, name: repoName })
}

const api = {
  getUserRepos: getUserRepos,
  getRepo: getRepo,
  createRepo: createRepo
}

export default api
