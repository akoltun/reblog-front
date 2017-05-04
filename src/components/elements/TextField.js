import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TextField = (
  { input, name, label, meta: { touched, error, warning } }
) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}</label>
    <input className="ui input" {...input} type="text" name={name} />
    {touched && ((error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    ))))}
  </div>
);

TextField.propTypes = {
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool
  })
};

export default TextField;
