'use strict';

import React from 'react';
import UI from 'material-ui';
import List from './ListComponent';
import Table from './TableComponent';
//import Chart from './ChartComponent';

require('styles/widgets/timelogs/Card.less');

class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timelogs: {
        currentTimelogs: {
          'id': 6,
          'title': 'Create Timelog Card Widget',
          'time': '00:00:00'

        },
        recentTimelogs: [
          { 'id': 1, 'icon': 'check_circle', 'title': 'Design something amazing', 'time': '04:43' },
          { 'id': 2, 'icon': 'folder', 'title': 'Smack a Problem', 'time': '21:31' },
          { 'id': 3, 'icon': 'flag', 'title': 'Smack a Problem', 'time': '21:31' },
          { 'id': 5, 'icon': 'check_circle', 'title': 'Smack a Problem', 'time': '21:31' },
          { 'id': 6, 'icon': 'check_circle', 'title': 'Smack a Problem', 'time': '21:31' },
          { 'id': 7, 'icon': 'check_circle', 'title': 'Smack a Problem', 'time': '21:31' }
        ]
      }
    }
  }

  render() {
    return (
      <UI.Card style={{width: '50%'}}>
        <UI.CardTitle
          title="My Timelogs"
          initiallyExpanded={true}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <UI.Tabs>
          <UI.Tab label={<UI.FontIcon style={{color: 'white'}} className="material-icons">view_list</UI.FontIcon>}>
            <UI.Paper style={{ 'height': '350px', 'overflowY': 'auto' }}>
              <List timelogs={this.state.timelogs.recentTimelogs}/>
            </UI.Paper>
          </UI.Tab>

          <UI.Tab label={<UI.FontIcon style={{color: 'white'}} className="material-icons">insert_chart</UI.FontIcon>}>
            <UI.Paper style={{ 'height': '350px', 'overflowY': 'auto' }}>
              <Table timelogs={this.state.timelogs.recentTimelogs}/>
            </UI.Paper>
          </UI.Tab>

          <UI.Tab label={<UI.FontIcon style={{color: 'white'}} className="material-icons">tab</UI.FontIcon>}>
            <UI.Paper style={{ 'height': '350px', 'overflowY': 'auto' }}>
              Table
            </UI.Paper>
          </UI.Tab>
        </UI.Tabs>
      </UI.Card>
    );
  }
}

CardComponent.displayName = 'WidgetsTimelogsCardComponent';

// Uncomment properties you need
// CardComponent.propTypes = {};
// CardComponent.defaultProps = {};

export default CardComponent;
