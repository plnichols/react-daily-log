import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>New entry</h3>
        </div>
        <div className="panel-body">
          <form className="form">
            <input type="text" className="form__input"/>
            <button className="form__submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
