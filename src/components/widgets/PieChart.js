import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

/* globals __CLIENT__ */
const c3 = __CLIENT__ ? require('c3') : undefined;

class PieChart extends React.Component {
  componentDidMount() {
    if (__CLIENT__) {
      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        data: {
          columns: this.props.data,
          type: 'pie'
        }
      });
    }
  }

  componentWillUnmount() {
    if (__CLIENT__) {
      this.chart.destroy();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (__CLIENT__) { 
      this.chart.unload(this.props);
      this.chart.load({columns: nextProps.data});
    }
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
