import React, { useEffect, useState } from 'react';
import WaitLoaderBlock from './Hero/WaitLoaderBlock/WaitLoaderBlock';
import Hero from './Hero/Hero';
import AppInfoDetailed from 'page/AppInfoDetailed/AppInfoDetailed';

const Search = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <main className="container">
      <Hero setUrl={setUrl} />
      <WaitLoaderBlock />
      <AppInfoDetailed />
    </main>
  );
};

export default Search;
