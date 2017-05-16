import React, {PropTypes} from 'react';

class List extends React.Component {
  render() {
    return(
      <div className="list"></div>
    );
  }
}

List.propTypes = {
  logs: PropTypes.array.isRequired
};

export default List;
