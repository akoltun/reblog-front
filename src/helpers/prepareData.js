import { parse } from 'qs';

import { compact } from 'lodash/array';
import { map } from 'lodash/collection';

export default function(store, routerState) {
  const { location, params, routes } = routerState;

  const query = parse(location.search.substr(1));

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  );
}
