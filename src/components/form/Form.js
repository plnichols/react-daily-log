import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <input type="text" className="form__input"/>
        <button className="form__submit">Add</button>
      </form>
    );
  }
}

export default Form;
