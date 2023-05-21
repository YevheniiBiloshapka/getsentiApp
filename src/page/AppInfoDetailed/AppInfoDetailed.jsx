import React from 'react';
import { DetailedBox } from './AppInfoDetailed.styled';
import Summary from './Summary/Summary';
import Analysis from './Analysis/Analysis';

const AppInfoDetailed = () => {
  return (
    <DetailedBox>
      <Summary />
      <Analysis />
    </DetailedBox>
  );
};

export default AppInfoDetailed;
