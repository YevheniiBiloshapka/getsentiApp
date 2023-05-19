import { Routes, Route, Navigate } from 'react-router-dom';
import AuthNavigation from 'page/AuthNavigation/AuthNavigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operation';

import LoginIn from 'page/AuthNavigation/LogIn/LoginIn';
import SignUp from 'page/AuthNavigation/SignUp/SignUp';
import Forgot from 'page/AuthNavigation/Forgot/Forgot';
import PasswordChange from 'page/AuthNavigation/PasswordChange/PasswordChange';
import Navigation from 'Layout/Navigation/Navigation';
import Search from 'page/Search/Search';

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
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<LoginIn />} end />
          <Route path="signup" element={<SignUp />} />
          <Route path="password-reset" element={<Forgot />} />
          <Route path="password-change" element={<PasswordChange />} />
        </Route>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Navigate to="/search" />} />
          <Route path="search" element={<Search />} />
          <Route path="history" element={<div>history</div>} />
          <Route path="detailed" element={<div>detailed</div>} />
        </Route>
      </Routes>
    </>
  );
};
