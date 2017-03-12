import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.data,
        type: 'pie'
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.unload(this.props);
    this.chart.load({columns: nextProps.data});
  }

  render() {
    return (
      <div ref="chart"></div>
    );
  }
}

PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array)
};

export default PieChart;
