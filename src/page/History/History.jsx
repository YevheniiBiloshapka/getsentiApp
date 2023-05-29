import React, { useEffect, useState } from 'react';
import HistoryTable from './HistoryTable/HistoryTable';
import { Main } from './History.styled';

import { fetchRecentSearches } from 'api/Applications/Applications';
import { Spiner } from 'components/Spiner/spiner';

const History = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchRecentSearches().then(res => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <Main className='container'>
      <h1>History</h1>
      {data
        ? <HistoryTable data={data} />
        : <Spiner styled={{ margin: 'auto auto' }} />}
    </Main>
  );
};

export default History;
