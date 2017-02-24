import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

export class App extends React.Component {
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
  return {};
}

export default connect(mapStateToProps)(App);
