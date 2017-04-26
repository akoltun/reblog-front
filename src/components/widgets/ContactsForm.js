import React, { PropTypes } from 'react';

import { assign, set } from 'lodash/object';
import classNames from 'classnames';

class ContactsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };
    this.form = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });

    alert(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', fieldName],
      false
    ));
  }

  handleChange(fieldName) {
    return (e) => {
      this.clearError(fieldName);
      switch (fieldName) {
        case 'email':
          if (e.target.value.length < 3) {
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              'слишком короткий'
            ));
          }
          break;
      }

      this.setState(set(
        assign({}, this.state),
        ['form', 'values', fieldName],
        e.target.value
      ));
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;

    return (
      <div>
        <form className="ui form" onSubmit={this.onSubmit}>
          <TextField
            label="Имя"
            name="fullName"
            value={fullName}
            onChange={this.handleChange('fullName')}
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            error={this.state.form.errors.email}
            onChange={this.handleChange('email')}
          />
          <TextArea
            label="Сообщение"
            name="message"
            value={message}
            onChange={this.handleChange('message')}
          />

          <input className="ui button primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactsForm;

const TextField = ({label, name, value, onChange, error}) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <input
      type="text"
      className="ui input"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
    {
      error &&
      <div
        className="ui basic red pointing prompt label transition visible">
        {error}
      </div>
    }
  </div>
);

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool
};

const TextArea = ({label, name, value, onChange, error}) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <textarea
      className="ui input"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
    {
      error &&
      <div
        className="ui basic red pointing prompt label transition visible">
        {error}
      </div>
    }
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool
};
