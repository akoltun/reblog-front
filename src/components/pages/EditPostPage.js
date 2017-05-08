import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import EditPostForm from 'components/widgets/EditPostForm';
import Loader from 'components/widgets/Loader';

const EditPostPage = ({item, isRequesting}) => (
  <div>
    {item && <Helmet title={item.title} />}
    <Loader loading={isRequesting}>
      <Item.Group>
        <EditPostForm />
      </Item.Group>
    </Loader>
  </div>
);

EditPostPage.propTypes = {
  item: PropTypes.object,
  isRequesting: PropTypes.bool,
  error: PropTypes.bool,
};

export default EditPostPage;
