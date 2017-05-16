import React, {PropTypes} from 'react';

class App extends React.Component {
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

export default App;
