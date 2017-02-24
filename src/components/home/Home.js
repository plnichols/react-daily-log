import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="home jumbotron">
        <h1>React Daily Log</h1>
        <p>React, Redux and React Router in ES6 for ultra responsive web apps.</p>
        <Link to="courses" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default Home;
