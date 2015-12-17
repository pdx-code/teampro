'use strict';

import React from 'react';
import UI from 'material-ui';
var PieChart = require("react-chartjs").Pie;

require('styles/widgets/timelogs/Chart.less');

class ChartComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataPie: [
        { value: 300, color:"#F7464A", highlight: "#FF5A5E", label: "Red" },
        { value: 50, color: "#46BFBD", highlight: "#5AD3D1", label: "Green" },
        { value: 100, color: "#FDB45C", highlight: "#FFC870", label: "Yellow"
        }
      ],
      optionsPie: {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 5,
        percentageInnerCutout : 0, // This is 0 for Pie charts
        animationSteps : 100,
        animateRotate : false,
        animateScale : true
      }
    }
  }

  componentDidMount () {}

  render() {
    let chartTypes = [
      { payload: '1', text: 'Pie' },
      { payload: '2', text: 'Bar' }
    ];
    return (
      <div className="chartView">
        <UI.Toolbar>

          <UI.ToolbarGroup>
            <UI.ToolbarTitle text="Chart Types" />
            <UI.ToolbarSeparator/>
            <UI.DropDownMenu menuItems={chartTypes} />
          </UI.ToolbarGroup>

          <UI.ToolbarGroup>
          </UI.ToolbarGroup>

        </UI.Toolbar>
        <div className="container">
          <div className="row">

            <div className="col-md-5">
              <ol>
                <li>Red: 300</li>
                <li>Orange: 100</li>
                <li>Green: 50</li>
              </ol>
            </div>

            <div className="col-md-5">
              <div className="pieChart">
                <PieChart data={this.state.dataPie} options={this.state.optionsPie} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

ChartComponent.displayName = 'WidgetsTimelogChartComponent';

// Uncomment properties you need
// ChartComponent.propTypes = {};
// ChartComponent.defaultProps = {};

export default ChartComponent;
