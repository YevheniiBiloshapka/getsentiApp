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
        ? data.length > 0 ? <HistoryTable data={data} />: <h3>Your search history is empty</h3>
        : <Spiner styled={{ margin: 'auto auto' }} />}
    </Main>
  );
};

export default History;
