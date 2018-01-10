import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cja29wrui3kek01571mxxfexh', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
  }
})

// getItem will return a single item given an ID
function getItem (itemID) {
  const queryItem = `
  query Item($id: ID!) {
    Item(id: $id){
      name
      createdAt
      updatedAt
      class
      author {
        userName
      }
    }
  }
  `
  return client.request(queryItem, {id: itemID})
}

// getUserItems will return multiple items belonging to a user given an ID
function getUserItems (userID) {
  const queryItems = `
    query requestUserItems($id: ID!){
        User(id: $id) {
        items{
          name
          class
          id
        }
      }
    }
  `
  return client.request(queryItems, {id: userID})
}

// addItem will add an item to a user's set
function addItem (itemName, itemClass, userID, data) {
  const createItem = `
   mutation createItem($name: String!, $class: String!, $authorID: ID!, $data: Data!) {
    createItem(
      data: $data,
      name:$name,
      class: $class,
      authorId: $authorID)
    {
      id
      name
      author{
        userName
      }
    }
  }
 `
  return client.request(createItem, {name: itemName, class: itemClass, authorID: userID, data: data})
}

// getSystemData will return a System's data
function getItemData (itemID) {
  const fetchItemData = `
  
 `
  return client.request(fetchItemData, {itemID: itemID})
}

const api = {
  getUserItems: getUserItems,
  getItem: getItem,
  addItem: addItem,
  getItemData: getItemData
}

export default api
