import React from 'react';
import SpinnerLib from 'react-spinner-material';
/**
 * Spinner
 * @param {Object} props
 * @return {Element} React Element
 */
const Spinner = () => {
  return (
    <SpinnerLib
      size={120}
      spinnerColor="#0099db"
      spinnerWidth={2}
      visible={true}
    />
  );
};

export default Spinner;
