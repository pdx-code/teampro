'use strict';

import React from 'react';
import UI from 'material-ui';
//import Pie from 'react-chartjs/lib/Pie';
import {Grid, Row, Col} from 'react-bootstrap'

var PieChart = require("react-chartjs").Pie;

require('styles/widgets/timelog/Chart.less');

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    //this.state = TimelogsStore.getState();
    this.state = {
      dataPie: [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        }
      ],

      optionsPie: {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 50, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
      }
    }

  }

  componentDidMount () {
  }


  render() {
    console.log(PieChart.classData);
    let chartTypes = [
      { payload: '1', text: 'Pie' },
      { payload: '2', text: 'Bar' }
    ];
    let iconButtonElement =  <UI.IconButton iconClassName="material-icons" tooltipPosition="bottom-center" tooltip="Sky">settings_system_daydream</UI.IconButton>;
    return (
      <div className="charts">
        <UI.Toolbar>

          <UI.ToolbarGroup>
            <UI.ToolbarTitle text="Chart Types" />
            <UI.ToolbarSeparator/>
            <UI.DropDownMenu menuItems={chartTypes} />
          </UI.ToolbarGroup>

          <UI.ToolbarGroup>
          </UI.ToolbarGroup>

        </UI.Toolbar>
        <Grid>
          <Row>
            <Col md={5}>
              <ol>
                <li>Red: 300</li>
                <li>Orange: 100</li>
                <li>Green: 50</li>
              </ol>
            </Col>
            <Col md={7}>
              <div className="pieChart">
                <PieChart data={this.state.dataPie} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ChartComponent.displayName = 'WidgetsTimelogChartComponent';

// Uncomment properties you need
// ChartComponent.propTypes = {};
// ChartComponent.defaultProps = {};

export default ChartComponent;
