import React, { useState, useEffect } from 'react';
import { DetailedBox } from './AppInfoDetailed.styled';
import Summary from './Summary/Summary';
import Analysis from './Analysis/Analysis';
import Sentiment from './Sentiment/Sentiment';
import response from './response.json';

const AppInfoDetailed = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(response);
  }, []);
  return (
    data && (
      <DetailedBox>
        <Summary
          totalReviews={data.total_review_count}
          overallSentiment={data.overall_sentiment}
          averageStars={data.average_stars}
          starsBreakdown={data.stars_breakdown}
        />
        <Analysis sentimentBreakdown={data.sentiment_breakdown} />
        <Sentiment sentimentTimeseries={data.sentiment_timeseries} />
      </DetailedBox>
    )
  );
};

export default AppInfoDetailed;
