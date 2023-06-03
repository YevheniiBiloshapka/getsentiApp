import React, { useState, useEffect } from 'react';
import { DetailedBox, TitleBox } from './AppInfoDetailed.styled';
import WaitLoaderBlock from 'page/Search/Hero/WaitLoaderBlock/WaitLoaderBlock';
import { Summary, Analysis, Sentiment, RatingsOverTime, FilterComponent } from './index';
import { Dialog, Button, IconButton, Tooltip } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

import { fetchApplication, fetchAnalytics } from 'api/Applications/Applications';

import { useSearchParams } from 'react-router-dom';

const AppInfoDetailed = ({ appId }) => {
  const [searchParams] = useSearchParams();
  const idFromQuery = searchParams.get('id');

  console.log('new log');
  // Use appId prop if it's not null or undefined, otherwise use id from the query params
  const actualAppId = appId ?? idFromQuery;
  console.log('in details', appId);
  const [appName, setAppName] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [filters, setFilters] = useState({});
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    if (actualAppId) {
      fetchApplication(actualAppId).then(res => {
        if (res.status === 200) {
          setAppName(res.data.name);
        } else if (res.status === 404) {
          setDataNotFound(true);
        }
      });
    }
  }, [actualAppId]);

  useEffect(() => {
    if (actualAppId) {
      fetchAnalytics(actualAppId, filters)
        .then(res => {
          if (res.status === 200) {
            setAnalyticsData(res.data);
          } else if (res.status === 404) {
            setDataNotFound(true);
          }
        })
        .finally(() => {
          setIsFirstLoad(false);
        });
    }
  }, [actualAppId, filters]);

  const handleReloadPage = () => {
    setDataNotFound(false);

    // Update URL without triggering a navigation event
    const url = new URL(window.location);
    url.searchParams.delete('id');
    window.history.replaceState(null, document.title, url.toString());

    // Optionally reload the page
    window.location.reload();
  };

  console.log('is_first_load', isFirstLoad);

  return (
    <DetailedBox>
      {actualAppId && (
        <>
          {appName && (
            <>
              <TitleBox>
                <h2 className="detailed-box__title">{appName}</h2>
                <Tooltip title="Update Data">
                  <IconButton color="primary">
                    <UpdateIcon />
                  </IconButton>
                </Tooltip>
              </TitleBox>
              <FilterComponent onFilter={setFilters} />
            </>
          )}
          {!analyticsData ? (
            <WaitLoaderBlock />
          ) : (
            <>
              <Summary
                totalReviews={analyticsData.total_review_count}
                overallSentimentNum={analyticsData.overall_sentiment?.value}
                averageStars={analyticsData.average_stars}
                starsBreakdown={
                  analyticsData.stars_breakdown ? JSON.parse(analyticsData.stars_breakdown) : null
                }
              />
              <Analysis
                overallSentiment={
                  analyticsData.overall_sentiment?.chart
                    ? JSON.parse(analyticsData.overall_sentiment?.chart)
                    : null
                }
                sentimentBreakdown={
                  analyticsData.sentiment_breakdown
                    ? JSON.parse(analyticsData.sentiment_breakdown)
                    : null
                }
              />
              <Sentiment
                sentimentTimeseries={
                  analyticsData.sentiment_timeseries
                    ? JSON.parse(analyticsData.sentiment_timeseries)
                    : null
                }
              />

              <RatingsOverTime
                starsTimeseries={
                  analyticsData.stars_timeseries ? JSON.parse(analyticsData.stars_timeseries) : null
                }
                reviewTimeseries={
                  analyticsData.review_timeseries
                    ? JSON.parse(analyticsData.review_timeseries)
                    : null
                }
              />
            </>
          )}
          <Dialog open={dataNotFound} onClose={handleReloadPage} sx={{ padding: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
              Data not found. Please try again later.
              <Button sx={{ mt: 2 }} onClick={handleReloadPage}>
                Close
              </Button>
            </div>
          </Dialog>
        </>
      )}
    </DetailedBox>
  );
};

// const AppInfoDetailed = ({appId}) => {
//
//   const [searchParams] = useSearchParams();
//   const [data, setData] = useState(null || response);
//   const [title, setTitle] = useState(null);
//     console.log("in app info", appId, appId || searchParams.get('id') || null);
//
//   const [loader, setLoader] = useState(false);
//   const [dataNotFound, setDataNotFound] = useState(false);
//
//
//   useEffect(() => {
//     if (appId) {
//       fetchApplication(appId).then(res => {
//         console.log(res);
//         setTitle(res.name);
//       });
//     }
//   }, [appId]);
//
//   useEffect(() => {
//     if (appId) {
//       setLoader(true);
//       fetchAnalytics(appId).then(res => {
//         console.log(res);
//         setData(res);
//         setLoader(false);
//       });
//     }
//   }, [appId]);
//
//   const handleSubmitFilter = async data => {
//     console.log(data);
//     const body = {
//       stars: data.stars,
//       sentiment: data.sentiment,
//       market: data.markets,
//       date_range_after: data.dateFrom,
//       date_range_before: data.dateTo,
//     };
//     fetchAnalytics(appId, body).then(res => {
//       setData(res);
//       setLoader(false);
//     });
//   };
//
//   const handleReloadPage = () => {
//     setDataNotFound(false);
//   };
//   console.log('id and title', appId, title);
//
//   return (
//     <DetailedBox>
//       {
//         title && (
//                    <TitleBox>
//             <h2 className="detailed-box__title">{title}</h2>
//             <Tooltip title="Update Data">
//               <IconButton color="primary">
//                 <UpdateIcon />
//               </IconButton>
//             </Tooltip>
//           </TitleBox>
//         )
//       }
//
//
//
//

//       {loader && <WaitLoaderBlock />}

//     </DetailedBox>
//   );
// };

export default AppInfoDetailed;
