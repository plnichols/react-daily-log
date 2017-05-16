import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

export class App extends React.Component {
  constructor() {
    super();

    this.setState({
      logs: [
        {
          id: 123,
          name: 'Mr Smith',
          timestamp: 178374343
        }
      ]
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="header" />

        <div className="content">
          {this.props.children}
        </div>

        <footer className="footer" />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps', state, ownProps);
  return {};
}

export default connect(mapStateToProps)(App);
