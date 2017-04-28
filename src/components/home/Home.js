import React from "react";

class Home extends React.Component {
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
						<form action=""></form>
					</div>
				</div>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3>Logs</h3>
					</div>
					<div className="panel-body">
						<div className="list"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
