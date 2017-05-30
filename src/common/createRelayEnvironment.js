
// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime'
//import Config from 'react-native-config'

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery (operation, variables, cacheConfig, uploadables) {
  return fetch('http://localhost:3080/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //Authorization: `Bearer ${Config.GITHUB_ACCESS_TOKEN}`,
      //'If-None-Match': ''
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    console.log(reponse);
    return response.json()
  }).catch((err) => {
     console.log(err);
     return err; 
  })
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store
})

// const env = new Environment({
//   network,
//   store
// })

// export default env












//   return fetch('https://api.github.com/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${Config.GITHUB_ACCESS_TOKEN}`,
//       'If-None-Match': ''
//     },
//     body: JSON.stringify({
//       query: operation.text, // GraphQL text from input
//       variables
//     })
//   }).then(response => {
//     return response.json()
//   })
// }