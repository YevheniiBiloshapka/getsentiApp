import { Routes, Route, Navigate } from 'react-router-dom';
import AuthNavigation from 'page/AuthNavigation/AuthNavigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'api/redux/auth/auth-operation';
import { PrivateRoute, PublicRoute } from 'hook/Route';

// TODO:  Authentication
import LoginIn from 'page/AuthNavigation/LogIn/LoginIn';
import SignUp from 'page/AuthNavigation/SignUp/SignUp';
import Forgot from 'page/AuthNavigation/Forgot/Forgot';
import PasswordChange from 'page/AuthNavigation/PasswordChange/PasswordChange';
import PasswordResetConfirm from 'page/AuthNavigation/PasswordResetConfirm/PasswordResetConfirm';

// TODO:  Page search history
import Navigation from 'Layout/Navigation/Navigation';
import Search from 'page/Search/Search';
import EmailConfirm from 'page/AuthNavigation/EmailConfirm/EmailConfirm';
import History from 'page/History/History';
import DetailedApp from 'page/DetailedApp/DetailedApp';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* // ! Authentication */}
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthNavigation />
            </PublicRoute>
          }
        >
          <Route index element={<Navigate to="/auth/login" />} />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginIn />
              </PublicRoute>
            }
            end
          />
          <Route
            path="signup"
            element={
              <PublicRoute restricted>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="password-reset"
            element={
              <PublicRoute restricted>
                <Forgot />
              </PublicRoute>
            }
          />
          <Route
            path="password-reset/:uid/:token"
            element={
              <PublicRoute restricted>
                <PasswordResetConfirm />
              </PublicRoute>
            }
          />
          <Route
            path="password-change"
            element={
              <PrivateRoute>
                <PasswordChange />
              </PrivateRoute>
            }
          />
          <Route
            path="email-confirm/:token"
            element={
              <PublicRoute restricted>
                <EmailConfirm />
              </PublicRoute>
            }
          />
        </Route>
        {/* // !  Page search history */}
        <Route path="/" element={<Navigation />}>
          <Route index element={<Navigate to="/search" />} />
          <Route
            path="search"
            element={
              <PublicRoute>
                <Search />
              </PublicRoute>
            }
          />
          <Route
            path="history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="history/detailed"
            element={
              <PrivateRoute>
                <DetailedApp />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
