import React, { useEffect, useState } from 'react';
import WaitLoaderBlock from './Hero/WaitLoaderBlock/WaitLoaderBlock';
import Hero from './Hero/Hero';

const Search = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <main className="container">
      <Hero setUrl={setUrl} />
      <WaitLoaderBlock />
    </main>
  );
};

export default Search;
