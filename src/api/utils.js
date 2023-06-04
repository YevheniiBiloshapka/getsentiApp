export const token = {
  get: () => {
    return localStorage.getItem('token');
  },
  set: token => {
    localStorage.setItem('token', token);
  },
  unset: () => {
    localStorage.removeItem('token');
  },
};


export const buildAuthenticationHeader = () => {
  return {'Authorization': `Token ${token.get()}`}
}
