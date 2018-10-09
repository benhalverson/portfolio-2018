import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import '../styles/css/App.css';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import BlogPage from '../components/BlogPage';
import ContactPage from '../components/ContactPage';
import ProjectEtrade from '../components/ProjectEtrade';
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/projects/etrade" component={ProjectEtrade} />
        {/* <Route path="/portfolio/biomarin" component={ProjectBiomarin} />
    <Route path="/portfolio/gsk" component={ProjectGsk} />
    <Route path="/portfolio/jazz" component={ProjectGsk} />
    <Route path="/portfolio/dailyjobs" component={ProjectGsk} /> */}
        {/* <Route path="/blog" component={BlogPage}/> */}
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
