import React, { PropTypes } from 'react';

import { Button, Label, Icon } from 'semantic-ui-react';

const Like = ({count, isRequesting, error, callback}) => (
  <Button
    color="red"
    content="Like"
    icon="heart"
    label={
      <Label basic color="red" pointing="left">{
        isRequesting
          ? (<Icon loading name='spinner' style={{margin:0}} />)
          : error
            ? '?'
            : count
      }</Label>
    }
    onClick={callback}
  />
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  count: PropTypes.number,
  isRequesting: PropTypes.bool,
  error: PropTypes.bool,
  callback: PropTypes.func
};

export default Like;
