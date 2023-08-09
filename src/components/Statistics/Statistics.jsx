import './Statistics.module.css';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.mainFeedback}>
      <p>
        Good:<span>{good}</span>
      </p>

      <p>
        Neutral:<span>{neutral}</span>
      </p>

      <p>
        Bad:<span>{bad}</span>
      </p>

      <p>
        Total Feedback:<span> {total}</span>
      </p>
      <p>
        Positive Feedback Percentage:
        <span> {positivePercentage}%</span>
      </p>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
