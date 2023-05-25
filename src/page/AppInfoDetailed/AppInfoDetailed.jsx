import React, { useState, useEffect } from 'react';
import { DetailedBox, TitleBox } from './AppInfoDetailed.styled';
import WaitLoaderBlock from 'page/Search/Hero/WaitLoaderBlock/WaitLoaderBlock';
import { Summary, Analysis, Sentiment, RatingsOverTime, FilterComponent } from './index';
import { Dialog, Button, IconButton, Tooltip } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { Spiner } from 'components/Spiner/spiner';
import { fetchApplications, fetchAnalytics } from 'api/Applications/Applications';
import response from './response.json';
import { useSearchParams } from 'react-router-dom';

const AppInfoDetailed = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null || response);
  const [title, setTitle] = useState('app');
  const [id, setId] = useState(searchParams.get('id') || null);
  const [loader, setLoader] = useState(false);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      fetchApplications(id).then(res => {
        // console.log(res);
        setTitle(res.name);
        setId(res.id);
      });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      setLoader(true);
      fetchAnalytics(id).then(res => {
        console.log(res);
        setData(res);
        setLoader(false);
      });
    }
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
    fetchAnalytics(id, body).then(res => {
      setData(res);
      setLoader(false);
    });
  };

  const handleReloadPage = () => {
    setDataNotFound(false);
  };

  return (
    <DetailedBox>
      {id && title && (
        <>
          <TitleBox>
            <h2 className="detailed-box__title">{title}</h2>
            <Tooltip title="Update Data">
              <IconButton color="primary">
                <UpdateIcon />
              </IconButton>
            </Tooltip>
          </TitleBox>
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
