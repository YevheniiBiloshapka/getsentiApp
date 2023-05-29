import { SvgIcon } from '@mui/material';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import MoodBadIcon from '@mui/icons-material/MoodBad';

function getSentiment(overallSentiment) {
  const range = 100 / 3;
  let sentiment;

   if (overallSentiment <  range) {
        sentiment = 0;
    } else if (overallSentiment < range * 2) {
        sentiment = 1;
    } else {
        sentiment = 2;
    }


  switch (sentiment) {
    case 0:
      return <SvgIcon className="bad" component={MoodBadIcon} />;
    case 1:
      return (
        <SvgIcon className="normal" component={SentimentDissatisfiedIcon} />
      );
    case 2:
      return (
        <SvgIcon className="good" component={SentimentVerySatisfiedIcon} />
      );
    default:
      return null;
  }
}
export default getSentiment;
