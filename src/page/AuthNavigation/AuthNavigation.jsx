import {
  Description,
  Wrapper,
  LeftBlock,
  Logo,
} from './AuthNavigation.styled.';
import { Outlet } from 'react-router-dom';

const AuthNavigation = () => {
  return (
    <Wrapper>
      <LeftBlock>
        <Logo />
        <Description>
          <h1>Monitor App Reviews & Ratings</h1>
          <p>
            Senti saves teams hours every week with powerful integrations and
            automations.
          </p>
        </Description>
      </LeftBlock>
      <Outlet />
    </Wrapper>
  );
};

export default AuthNavigation;
