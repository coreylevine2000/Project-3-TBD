import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import HomeStrap from './pages/Home';
import Menu from './pages/Menu.js';
import MyOrder from './pages/MyOrder';
import History from './pages/History';
import SignupStrap from './pages/Signup';
import LoginStrap from './pages/Login';
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success";

import HeaderStrap from './components/Header'
import FooterStrap from './components/Footer'
import NavStrap from './components/Nav';