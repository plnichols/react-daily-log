import React from "react";
import Form from '../form/Form';
import List from '../list/List';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      logs: [
        {id: 123, text: 'Lorem ipsum sit dolor amet', timestamp: 178374343 }
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

				<Form />
				<List logs={this.state.logs} />
			</div>
		);
	}
}

export default Home;
