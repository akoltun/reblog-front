import qs from 'qs';

export const queryString = (params) => {
  const str = qs.stringify(params);
  return str ? `?${str}` : '';
};

export const postsPath = (p = {}) => `/${queryString(p)}`;
export const postPath = (id = ':id', p = {}) => `/posts/${id}${queryString(p)}`;
export const likePostPath = (id = ':id') => `/posts/${id}/like`;
export const aboutPath = (p = {}) => `/about${queryString(p)}`;
