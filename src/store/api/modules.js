
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjgjfc3us6w7i0174gjbfa3yh', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
  }
})

// getRepoModulesID will return the IDs of a repo's knowledge modules
function getRepoModulesID (repoID) {
  const queryRepoModulesID = `
  query ModuleIDs($id: ID!){
      Repository(
        id: $id
      ) {
        systems{
          id
          name
        }
        protocols{
          id
          name
        }
        experiments{
          id
          name
        }
      }
    }
  `
  return client.request(queryRepoModulesID, {id: repoID})
}

// createModule will create a module of the given type and return the name and ID
function createModule ({repoID, moduleName, moduleType}) {
  switch (moduleType) {
    case 'Protocol':
      const createProtocolQuery = `
        mutation createProtocol ($name: String!, $id: ID!) {
          createProtocol (
            linkedRepositoryId: $id
            name: $name
          ) {
            id
            name
          }
        }
        `
      return client.request(createProtocolQuery, { id: repoID, name: moduleName })
      .then(data => {
        return data.createProtocol
      })
    case 'System':
      const createSystemQuery = `
        mutation createSystem ($name: String!, $id: ID!) {
          createSystem (
            linkedRepositoryId: $id
            name: $name
          ) {
            id
            name
          }
        }
        `
      return client.request(createSystemQuery, { id: repoID, name: moduleName }).then(data => {
        return data.createSystem
      })
    case 'Experiment':
      const createExperimentQuery = `
        mutation createExperiment ($name: String!, $id: ID!) {
          createExperiment (
            linkedRepositoryId: $id
            name: $name
          ) {
            id
            name
          }
        }
        `
      return client.request(createExperimentQuery, { id: repoID, name: moduleName }).then(data => {
        return data.createExperiment
      })
  }
}

function getProtocolSteps ({protocolID}) {
  const getProtocolSteps = `
    query getProtocolSteps ($id: ID!) {
      Protocol (id: $id) {
        id
        steps
      }
    }
  `
  console.log(protocolID)
  return client.request(getProtocolSteps, {id: protocolID})
}

function addProtocolSteps ({protocolID, protocolSteps}) {
  // If you're adding steps to the protocol, then the protocol already exists
  // Need to change this
  const addProtocolSteps = `
    mutation addProtocolSteps ($steps: [String!], $id: ID!) {
      addProtocolSteps (
        name: $name
        steps: $steps
        linkedRepositoryId: $id
      ) {
        id
        name
      }
    }
  `
  return client.request(addProtocolSteps, { id: protocolID, steps: protocolSteps }).then(data => { return data.addProtocolSteps })
}
const api = {
  getRepoModulesID: getRepoModulesID,
  createModule: createModule,
  getProtocolSteps: getProtocolSteps,
  addProtocolSteps: addProtocolSteps
}

export default api
