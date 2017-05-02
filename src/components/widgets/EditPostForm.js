import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import classNames from 'classnames';

const validate = (values) => {
  const errors = {};

  if (values.title && values.title.length < 5) {
    errors.title = 'Длина заголовка должна быть больше 5';
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (!values.title || values.title.length < 10) {
    warnings.title = 'Рекомендуемая длина заголовка должна быть больше 10';
  }

  return warnings;
};

const renderField = (
  { input, name, label, type, meta: { touched, error, warning } }
) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}</label>
    <input className="ui input" {...input} type={type} name={name} />
    {touched && ((error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    ))))}
  </div>
);

const EditPostForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <form onSubmit={handleSubmit} className="ui form">
    <Field label="Заголовок" component={renderField} type="text" name="title" />
    <Field title="Дата создания" component={renderField} type="text" name="created" />
    <Field label="Автор" component={renderField} type="text" name="author" />
    {(!pristine && !submitting) && <button className="ui button" onClick={reset}>Очистить</button>}
    <input type="submit" className="ui button primary" value="Обновить" />
  </form>
);

EditPostForm.propTypes = {
  handleSubmit: PropTypes.func
};

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const submit = (values) => {
  return sleep(1000).then(() => {
    if (!values.author) {
      throw new SubmissionError({ author: 'Не указан автор' });
    } else {
      alert(JSON.stringify(values));
    }
  });
};

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.item.title,
      created: state.post.item.meta.created,
      author: state.post.item.meta.author
    }
  }) //,
  // (dispatch) => ({
  //   updatePost: flowRight(dispatch, updatePost)
  // })
)(reduxForm({
  form: 'editPost',
  validate,
  warn,
  onSubmit: submit
})(EditPostForm));
