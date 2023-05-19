import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Description,
  Wrapper,
  LeftBlock,
  Logo,
} from './AuthNavigation.styled.';
import { Spiner } from 'components/Spiner/spiner';

const AuthNavigation = () => {
  return (
    <Wrapper>
      <LeftBlock>
        <Link to="/">
          <Logo />
        </Link>
        <Description>
          <h1>
            Monitor App <br />
            Reviews & Ratings
          </h1>
          <p>
            Senti saves teams hours every week with powerful integrations and
            automations.
          </p>
        </Description>
      </LeftBlock>
      <Suspense fallback={<Spiner styled={{ margin: 'auto auto' }} />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default AuthNavigation;
