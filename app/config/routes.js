var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main'); //Routed Components
var Home = require('../components/Home');

//Routes

var routes = (
	<Router history={hashHistory}>
	  <Route path='/' component={Main}>
	  	<IndexRoute component={Home} /> 
	  </Route>
	</Router>
	);

module.exports = routes;