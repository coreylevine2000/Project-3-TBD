import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {ApolloProvider} from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

// import Home from './pages/Home';
// import Menu from './pages/Menu.js';
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
// const client = new ApolloClient({
//     request: (operation) => {
//       const token = localStorage.getItem('id_token')
//       operation.setContext({
//         headers: {
//           authorization: token ? `Bearer ${token}`: ''
//         }
//       })
//     },
//     uri: 'http://localhost:3001/graphql',
//   })
  
//   function App() {
//     return (
//       <ApolloProvider client={client}>
//         <Router>
//           <div>
//             <StoreProvider>
//                 <Header />
//                 <Navbar />
//                 <Switch>
//                   <Route exact path="/" element={<Home />} />
//                   <Route exact path="/menu" element={<Menu />} />
//                   <Route exact path="/login" element={<Login />} />
//                   <Route exact path="/signup" element={<Signup />} />
//                   <Route exact path="/cart" element={<Order />} />
//                   <Route exact path="/history" element={<History />} />
//                   <Route exact path="/success" element={<Success />} />
//                   <Route element={<Home />} />
//                   <Route exact path="*" element={<NoMatch />} />
//                 </Switch>
//                 <Footer />
//             </StoreProvider>
//           </div>
//         </Router>
//       </ApolloProvider>
      
//     );
//   }
// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : '',
//       },
//     });
//   },
//   uri: '/graphql',
// });

const App = () => {
  return (
      <div>
      <Header />
      <MenuContainer />
      <Footer /> 
      </div>    
  )
};
export default App;
