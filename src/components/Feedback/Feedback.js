import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onClickBtn = feedbackName => () => {
    onLeaveFeedback(feedbackName);
  };

  return (
    <ul>
      {Object.keys(options).map(feedbackName => {
        return (
          <li key={feedbackName}>
            <button onClick={onClickBtn(feedbackName)}>{feedbackName}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
