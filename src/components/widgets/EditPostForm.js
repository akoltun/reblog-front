import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
// import classNames from 'classnames';

import TextField from 'components/elements/TextField';

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

const EditPostForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <form onSubmit={handleSubmit} className="ui form">
    <Field label="Заголовок" component={TextField} name="title" />
    <Field label="Дата создания" component={TextField} name="created" />
    <Field label="Автор" component={TextField} name="author" />
    {(!pristine && !submitting) &&
      <button className="ui button" onClick={reset}>Очистить</button>}
    <input type="submit" className="ui button primary" value="Обновить" />
  </form>
);

EditPostForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.bool
};

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const submit = (values) => (
  sleep(1000).then(() => {
    if (values.author) {
      alert(JSON.stringify(values));
    } else {
      throw new SubmissionError({ author: 'Не указан автор' });
    }
  })
);

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
