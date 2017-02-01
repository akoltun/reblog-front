import qs from 'qs';

export const postsPath = (p = {}) => `/${queryString(p)}`;
export const postPath = (id = ':id', p = {}) => `/posts/${id}${queryString(p)}`;
export const aboutPath = (p = {}) => `/about${queryString(p)}`;

function queryString(params) {
  const str = qs.stringify(params);
  return str ? `?${str}` : '';
}