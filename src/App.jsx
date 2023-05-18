import { Routes, Route, Navigate } from 'react-router-dom';
import AuthNavigation from 'page/AuthNavigation/AuthNavigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operation';

import LoginIn from 'page/AuthNavigation/LogIn/LoginIn';
import SignUp from 'page/AuthNavigation/SignUp/SignUp';
import Forgot from 'page/AuthNavigation/Forgot/Forgot';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* // ! авторизация */}
      <Routes>
        <Route path="/auth" element={<AuthNavigation />}>
          <Route index element={<Navigate to="/auth/signin" />} />
          <Route path="signin" element={<LoginIn />} end />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </>
  );
};
