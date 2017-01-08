import React, { PropTypes } from 'react';

import { bind } from 'lodash/function';

import { Button } from 'semantic-ui-react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: props.like };
    this.handleLike = bind(this.handleLike, this);
  }

  handleLike() {
    this.setState({ like: this.state.like + 1 });
  }

  render() {
    return (
      <Button
        color="red"
        content="Like"
        icon="heart"
        label={{
          basic: true,
          color: 'red',
          pointing: 'left',
          content: this.state.like
        }}
        onClick={this.handleLike}
      />
    );
  }
}

Like.defaultProps = {
  like: 0
};

Like.propTypes = {
  like: PropTypes.number
};

export default Like;
