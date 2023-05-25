import React, { useEffect, useState } from 'react';
import HistoryTable from './HistoryTable/HistoryTable';
import { Main } from './History.styled';
import response from './data.json';

import { fetchRecentSearches } from 'api/Applications/Applications';
import { Spiner } from 'components/Spiner/spiner';

const History = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchRecentSearches().then(res => {
      console.log(res);
      setData(response);
    });
  }, []);

  return (
    <Main className="container">
      <h1>History</h1>
      {data && <HistoryTable data={data} />}
      {!data && <Spiner styled={{ margin: 'auto auto' }} />}
    </Main>
  );
};

export default History;
