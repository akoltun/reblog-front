import React, { PropTypes } from 'react';

import { assign } from 'lodash/object';
import classNames from 'classnames';

class GoodWishesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: {}, sent: false };
    this.form = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });

    if (!this.form.goodWish || this.form.goodWish.value.length < 3) {
      this.setState(assign(
        {},
        this.state,
        {
          errors: assign(
                          {},
                          this.state.errors,
                          { goodWish: 'Ваше благопожелание слишком короткое' }
                        )
        }
      ));
    }
    else {
      this.setState({ sent: true });
    }
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      <div>
        {this.state.sent ? this.form.goodWish.value : (
          <form className="ui form" onSubmit={this.onSubmit}>
            <TextArea
              label="Благопожелание"
              name="goodWish"
              error={this.state.errors.goodWish}
              fieldRef={this.generateRef('goodWish')}
            />

            <input
              className="ui button primary"
              type="submit"
              value="Показать"
            />
          </form>
        )}
      </div>
    );
  }
}

export default GoodWishesForm;

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      <div className={classNames('ui field', { error: !!error })}>
        <label htmlFor={name}>{label}:</label>
        <textarea
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
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
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fieldRef: PropTypes.func,
  error: PropTypes.bool
};
