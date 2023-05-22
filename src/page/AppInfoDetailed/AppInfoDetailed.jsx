import React, { useState, useEffect } from 'react';
import { DetailedBox } from './AppInfoDetailed.styled';
import Summary from './Summary/Summary';
import Analysis from './Analysis/Analysis';
import Sentiment from './Sentiment/Sentiment';
import RatingsOverTime from 'page/AppInfoDetailed/RatingsOverTime/RatingsOverTime';
import response from './response.json';
import FilterComponent from './FilterComponent/FilterComponent';
const AppInfoDetailed = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(response);
  }, []);

  const handleSubmitFilter = data => {
    console.log(data);
  };

  return (
    data && (
      <DetailedBox>
        <FilterComponent onFilter={handleSubmitFilter} />
        <Summary
          totalReviews={data.total_review_count}
          overallSentiment={data.overall_sentiment}
          averageStars={data.average_stars}
          starsBreakdown={data.stars_breakdown}
        />
        <Analysis sentimentBreakdown={data.sentiment_breakdown} />
        <Sentiment sentimentTimeseries={data.sentiment_timeseries} />
        <RatingsOverTime
          starsTimeseries={data.stars_timeseries}
          reviewTimeseries={data.review_timeseries}
        />
      </DetailedBox>
    )
  );
};

export default AppInfoDetailed;
