var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRouter = ReactRouter.IndexRoute;
var Main = Main = require('../components/Main'); //Routed Components
var Home = Main = require('../components/Home');

//Routes

var routes = (
	<Router>
	  <Route path='/' component={Main}>
	  	<Route path='/home' component={Home} /> 
	  </Route>
	</Router>
	);