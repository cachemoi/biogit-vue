
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

function getProtocol ({protocolID}) {
  const getProtocol = `
    query getProtocol ($id: ID!) {
      Protocol (id: $id) {
        steps
      }
    }
  `
  return client.request(getProtocol, {id: protocolID})
}

function createProtocol ({repoID, moduleName, protocolSteps}) {
  const createProtocol = `
    mutation createProtocol ($name: String!, $steps: [String!], $id: ID!) {
      createProtocol (
        name: $name
        steps: $steps
        linkedRepositoryId: $id
      ) {
        id
        name
      }
    }
  `
  return client.request(createProtocol, { id: repoID, name: moduleName, steps: protocolSteps }).then(data => { return data.createProtocol })
}
const api = {
  getRepoModulesID: getRepoModulesID,
  createModule: createModule,
  getProtocol: getProtocol,
  createProtocol: createProtocol
}

export default api
