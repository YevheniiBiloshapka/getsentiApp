import React from 'react';
import Loader from 'components/Loader/Loader';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 0;
  gap: 40px;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 23px;
  line-height: 140%;

  color: #080a43;
  max-width: 310px;
`;

const WaitLoaderBlock = () => {
  return (
    <Box>
      <Loader styled={{ marginRight: '10px' }} />
      <p>Please wait while we analyze your application.</p>
    </Box>
  );
};

export default WaitLoaderBlock;
