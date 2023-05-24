import React, { useState, useEffect } from 'react';
import { DetailedBox } from './AppInfoDetailed.styled';
import Summary from './Summary/Summary';
import Analysis from './Analysis/Analysis';
import Sentiment from './Sentiment/Sentiment';
import RatingsOverTime from 'page/AppInfoDetailed/RatingsOverTime/RatingsOverTime';
import FilterComponent from './FilterComponent/FilterComponent';
import WaitLoaderBlock from 'page/Search/Hero/WaitLoaderBlock/WaitLoaderBlock';
import { Spiner } from 'components/Spiner/spiner';
import { fetchApplications, fetchAnalytics } from 'api/Applications/Applications';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

const AppInfoDetailed = ({ appId }) => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);
  const [id, setId] = useState(null);
  const [loader, setLoader] = useState(false);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    if (appId) {
      fetchApplications(appId).then(res => {
        console.log(res);
        setTitle(res.name);
        setId(res.id);
      });
    }
  }, [appId]);

  const fetchData = async () => {
    if (id) {
      setLoader(true);
      try {
        const res = await fetchAnalytics(id);
        console.log(res);
        if (isDataEmpty(res)) {
          setData(null);
          setDataNotFound(true);
        } else {
          setData(res);
          if (!isDataUnchanged(res)) {
            setTimeout(fetchData, 15000);
          }
        }
      } catch (error) {
        console.error(error);
        setDataNotFound(true);
      }
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmitFilter = async data => {
    console.log(data);
    const body = {
      stars: data.stars,
      sentiment: data.sentiment,
      market: data.markets,
      date_range_after: data.dateFrom,
      date_range_before: data.dateTo,
    };
    if (id) {
      setLoader(true);
      try {
        const res = await fetchAnalytics(id, body);
        console.log(res);
        if (isDataEmpty(res)) {
          setData(null);
          setDataNotFound(true);
        } else {
          setData(res);
          if (!isDataUnchanged(res)) {
            setTimeout(fetchData, 15000);
          }
        }
      } catch (error) {
        console.error(error);
        setDataNotFound(true);
      }
      setLoader(false);
    }
  };

  const handleReloadPage = () => {
    setDataNotFound(false);
  };

  const isDataEmpty = response => {
    const {
      total_review_count,
      overall_sentiment,
      average_stars,
      stars_breakdown,
      sentiment_breakdown,
      sentiment_timeseries,
      stars_timeseries,
      review_timeseries,
    } = response;

    return (
      total_review_count === 0 &&
      overall_sentiment === 0 &&
      average_stars === 0 &&
      Object.values(stars_breakdown).every(value => value === 0) &&
      Object.values(sentiment_breakdown).every(value => value === 0) &&
      sentiment_timeseries.length === 0 &&
      stars_timeseries.length === 0 &&
      review_timeseries.length === 0
    );
  };

  const isDataUnchanged = response => {
    const {
      total_review_count,
      overall_sentiment,
      average_stars,
      stars_breakdown,
      sentiment_breakdown,
      sentiment_timeseries,
      stars_timeseries,
      review_timeseries,
    } = response;

    return (
      total_review_count === 0 &&
      overall_sentiment === 0 &&
      average_stars === 0 &&
      Object.values(stars_breakdown).every(value => value === 0) &&
      Object.values(sentiment_breakdown).every(value => value === 0) &&
      sentiment_timeseries.length === 0 &&
      stars_timeseries.length === 0 &&
      review_timeseries.length === 0
    );
  };

  return (
    <DetailedBox>
      {title && (
        <>
          <h2 className="detailed-box__title">{title}</h2>
          <FilterComponent onFilter={handleSubmitFilter} />

          {data ? (
            <>
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
            </>
          ) : (
            <Spiner styled={{ margin: '50px auto', alignSelf: 'center' }} />
          )}
        </>
      )}
      {loader && <WaitLoaderBlock />}
      <Dialog open={dataNotFound} onClose={handleReloadPage} sx={{ padding: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
          Data not found. Please try again later.
          <Button sx={{ mt: 2 }} onClick={handleReloadPage}>
            Close
          </Button>
        </div>
      </Dialog>
    </DetailedBox>
  );
};

export default AppInfoDetailed;
