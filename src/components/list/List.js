import React, {PropTypes} from 'react';

class List extends React.Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>Logs</h3>
        </div>
        <div className="panel-body">
          <div className="list"></div>
        </div>
      </div>
    );
  }
}

List.PropTypes = {
  logs: PropTypes.array.isRequired
};

export default List;
