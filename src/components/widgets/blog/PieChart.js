import React, { PropTypes } from 'react';

import PieChartView from 'components/widgets/blog/PieChartView';

const PieChart = ({items}) => {
  const pieChartData = items.map(
    (item) => ([item.text, item.meta.like || 0])
  );

  return (
    <PieChartView data={pieChartData} />
  );
};

PieChart.propTypes = {
  items: PropTypes.array
};

export default PieChart;
