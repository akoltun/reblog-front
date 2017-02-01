import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({like, likeCallback}) => (
  <Button
    color="red"
    content="Like"
    icon="heart"
    label={{
      basic: true,
      color: 'red',
      pointing: 'left',
      content: like
    }}
    onClick={likeCallback}
  />
);

Like.defaultProps = {
  like: 0
};

Like.propTypes = {
  like: PropTypes.number,
  likeCallback: PropTypes.func
};

export default Like;
