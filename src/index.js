// Entry point of the app.
// This is where Webpack starts parsing the application.

/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from "./App";
import Home from './components/home/Home';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			{/*<Route path="courses" component={CoursesPage} />*/}
			{/*<Route path="course" component={ManageCoursePage} />*/}
			{/*<Route path="course/:id" component={ManageCoursePage} />*/}
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));
