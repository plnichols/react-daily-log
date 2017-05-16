import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/home/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/*<Route path="courses" component={CoursesPage} />*/}
    {/*<Route path="course" component={ManageCoursePage} />*/}
    {/*<Route path="course/:id" component={ManageCoursePage} />*/}
  </Route>
);
