import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { ApolloClient , ApolloProvider , InMemoryCache } from '@apollo/client'
import Clients from './components/Clients'

const client =  new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache : new InMemoryCache(),
})
function App() {

  return (
    <>
    <ApolloProvider client={client}>

    <Navbar/>
     <div className='underline rounded-3xl border-r-8 text-lg text-red-900 bg-black' ><Clients/></div>
     </ApolloProvider>
   
    </>
  )
}

export default App
