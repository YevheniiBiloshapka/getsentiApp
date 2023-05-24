import { useSelector } from 'react-redux';
import { selectorToken } from 'api/redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) =>
  useSelector(selectorToken) && restricted ? <Navigate to="/" /> : children;

export const PrivateRoute = ({ children }) => (useSelector(selectorToken) ? children : <Navigate to="/auth" />);
