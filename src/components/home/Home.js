import React from "react";
import Form from '../form/Form';
import List from '../list/List';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      logs: [
        {
          id: 123,
          name: 'Mr Smith',
          timestamp: 178374343
        }
      ]
    };
  }

	render() {
		return (
			<div>
				<div className="home jumbotron">
					<h1 className="home__title">Title</h1>
					<p className="home__description">React, Redux and React Router in ES6 for ultra responsive web apps.</p>
				</div>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3>New entry</h3>
					</div>
					<div className="panel-body">
						<Form/>
					</div>
				</div>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3>Logs</h3>
					</div>
					<div className="panel-body">
						<List logs={this.state.logs} />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
