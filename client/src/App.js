import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {ApolloProvider} from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
// import Order from './pages/Order';
// import History from './pages/History';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import NoMatch from "./pages/NoMatch";
// import Success from "./pages/Success";

// import Menu from './pages/Menu';
// import Home from './pages/Home';
import MenuContainer from './components/MenuContainer'
import Footer from './components/Footer';
import Header from './components/Header';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    {/* <Header /> */}
    {/* <Navbar /> */}
      <>
      <MenuContainer />
      </>
      {/* <Footer /> */}
    </Router>
    </ApolloProvider>
  );
}

// const App = () => {
//   return (
//       <div>
//       <Header />
//       <MenuContainer />
//       <Footer /> 
//       </div>    
//   )
// };
export default App;
