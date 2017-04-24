import React, { PropTypes } from 'react';

import { assign, mapValues } from 'lodash/object';
import classNames from 'classnames';

class ContactsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: {} };
    this.form = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });
    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.length < 3) {
      this.setState(assign(
        {},
        this.state,
        { errors: assign({}, this.state.errors, { email: true }) }
      ));
    }

    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onSubmit}>
          <TextField
            label="Имя"
            name="fullName"
            fieldRef={this.generateRef('fullName')}
          />
          <TextField
            label="Email"
            name="email"
            error={this.state.errors.email}
            fieldRef={this.generateRef('email')}
          />
          <TextArea
            label="Сообщение"
            name="message"
            fieldRef={this.generateRef('message')}
          />

          <input className="ui button primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactsForm;

class TextField extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      <div className={classNames('ui field', { error })}>
        <label htmlFor={name}>{label}:</label>
        <input
          type="text"
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
        />
      </div>
    );
  }
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fieldRef: PropTypes.func,
  error: PropTypes.bool
};

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;

    return (
      <div className="ui field">
        <label htmlFor={name}>{label}:</label>
        <textarea
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fieldRef: PropTypes.func,
  error: PropTypes.bool
};
