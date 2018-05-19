import { GraphQLClient } from 'graphql-request'
// import gql from 'graphql-tag'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjgjfc3us6w7i0174gjbfa3yh', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
  }
})

// getWorldNews will return the world's news
function getWorldNews ({itemNum}) {
  const queryWorldNews =
    `
    query queryUserNews($itemNum: Int){
      allRepositories(
        orderBy: updatedAt_DESC
        first: $itemNum
      ) {
        name
        updatedAt
      }
    }

  `
  return client.request(queryWorldNews)
}

// getUserNews will return a user's news
function getUserNews ({userID, itemNum}) {
  const queryUserNews =
    `
    query queryUserNews($id: ID! $itemNum: Int){
      allRepositories(
        orderBy: updatedAt_DESC first: $itemNum
        filter: {
          author: {
            id: $id
          }
        }
      ) {
        name
        updatedAt
      }
    }

  `
  return client.request(queryUserNews, {id: userID, itemNum: itemNum})
}

const api = {
  getWorldNews: getWorldNews,
  getUserNews: getUserNews
}

export default api
