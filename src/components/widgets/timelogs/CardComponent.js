'use strict';
require('styles/widgets/timelogs/Card.less');

import React from 'react';
import UI from 'material-ui';
import List from './ListComponent';
import Table from './TableComponent';
import Chart from './ChartComponent';

import { createStore } from 'redux';

//Do every thing here.
//=============================================

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//let store = createStore(counter);

//let unsubscribe = store.subscribe(() =>
//  console.log(store.getState())
//);
//
//store.getState();
//store.dispatch({ type: 'INCREMENT' }); // 1
//store.dispatch({ type: 'DECREMENT' }); // 10
//
//unsubscribe();


//=============================================

class CardComponent extends React.Component {

  constructor(props) {
    super(props);

    let store = createStore(counter);
    console.log('------------------------');
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    )

    console.log(store.getState());

    unsubscribe();
    //this.state = store.getState();

    this.state = {
      "timelogs": {
        "currentTimelogs": {
          "id": 6,
          "title": "Create Timelog Card Widget",
          "time": "00:00:00"

        },
        "recentTimelogs": [
          { "id": 1, "icon": "check_circle", "title": "Design something amazing", "time": "04:43" },
          { "id": 2, "icon": "folder", "title": "Smack a Problem", "time": "21:31" },
          { "id": 3, "icon": "flag", "title": "Smack a Problem", "time": "21:31" },
          { "id": 5, "icon": "check_circle", "title": "Smack a Problem", "time": "21:31" },
          { "id": 6, "icon": "check_circle", "title": "Smack a Problem", "time": "21:31" },
          { "id": 7, "icon": "check_circle", "title": "Smack a Problem", "time": "21:31" }
        ]
      }
    }

  }

  render() {
    return (
      <UI.Card style={{width: '50%'}}  initiallyExpanded={true}>
        <UI.CardTitle
          title="My Timelogs"
          initiallyExpanded={true}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <UI.Tabs expandable={true}>

          <UI.Tab label={<UI.FontIcon style={{color: 'white'}} className="material-icons">insert_chart</UI.FontIcon>}>
            <UI.Paper style={{ 'height': '350px', 'overflowY': 'auto' }}>
              <Chart timelogs={this.state.timelogs.recentTimelogs}/>
            </UI.Paper>
          </UI.Tab>

          <UI.Tab label={<UI.FontIcon style={{color: 'white'}} className="material-icons">tab</UI.FontIcon>}>
            <UI.Paper style={{ 'height': '350px', 'overflowY': 'auto' }}>
              <Table timelogs={this.state.timelogs.recentTimelogs}/>
            </UI.Paper>
          </UI.Tab>

          <UI.Tab label={<UI.FontIcon style={{color: 'white'}} className="material-icons">view_list</UI.FontIcon>}>
            <UI.Paper style={{ 'height': '350px', 'overflowY': 'auto' }}>
              <List timelogs={this.state.timelogs.recentTimelogs}/>
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
