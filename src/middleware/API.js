import request from 'superagent';
import { stringify } from 'qs';
import { assign, pick } from 'lodash';

import { API_ROOT } from 'constants/API';

function APICall({ endpoint, method, query, payload}) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);

    if (query) {
      r.query(stringify(query));
    }

    if (payload) {
      r = r.send(payload);
    }

    r.end((error, data) => (
      error ?
        reject(error)
      : resolve(data.body)
    ));
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, { [API_CALL]: undefined })
);

export default store => next => action => {
  if (!action[API_CALL]) return next(action);

  const types = action[API_CALL].types;

  next(nextAction(action, { type: types.request }));

  const promise = APICall(
    pick(action[API_CALL], ['endpoint', 'method', 'query', 'payload'])
  );

  promise.then(
    (response) => next(
      nextAction(action, { response, type: types.success })
    ),
    (error) => next(
      nextAction(action, { error, type: types.error })
    )
  );

  return promise;
};
