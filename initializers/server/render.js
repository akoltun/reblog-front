import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import Helmet from 'react-helmet';
import { compact } from 'lodash/array';

import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/prepareData';

const store = createStore();

const notFound = { status: 404, body: 'NOT FOUND' };
const serverError = msg => ({ status: 500, body: msg });

const sendResponse = (res, obj) => res.status(obj.status).send(obj.body);

export default (req, res) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) return sendResponse(res, serverError(error.message));
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
        return;
      }
      if (renderProps === undefined) return sendResponse(res, notFound);

      return Promise.all(compact(prepareData(store, renderProps))).then(() => {
        const initialState = JSON.stringify(store.getState());

        const content = ReactDOMServer.renderToString(
          React.createElement(
            Provider,
            { store },
            React.createElement(RouterContext, renderProps)
          )
        );

        const head = Helmet.rewind();

        res.status(200);
        res.render(
          'index',
          { initialState, content, head }
        );
      })
      .catch(error => sendResponse(res,
          error ? serverError(error.message) : notFound));
    }
  );
};
