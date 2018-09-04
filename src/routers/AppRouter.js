import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import '../App.css';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import BlogPage from '../components/BlogPage';
import ContactPage from '../components/ContactPage';
const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
    <Route path="/" component={HomePage} exact={true}/>
    <Route path="/portfolio" component={PortfolioPage}/>
    <Route path="/blog" component={BlogPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route component={NotFoundPage}/>
    </Switch>
  </div>
  
  </BrowserRouter>
  
)
export default AppRouter;