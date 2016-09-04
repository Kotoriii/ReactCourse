var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '5928680aab3a4b6db6d205eab8f9c8ab';
var sentryApp = '96471';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;
//f(d)=v

Raven.config(sentryURL).install();

ReactDom.render(
	routes,
	document.getElementById('app')
	);