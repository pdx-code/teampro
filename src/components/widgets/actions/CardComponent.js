'use strict';

import React from 'react';
import $ from 'jQuery';
import _ from 'underscore';

import UI from 'material-ui';
import Project from './ProjectComponent';
import Table from './TableComponent';
import Score from './ScoreComponent';

require('styles/widgets/ActionsCard.less');
var actions = require('../../../actions-data');

class CardComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          "actions": []
      };
  }

  loadActions() {
    this.setState({"actions": actions});
  }

  componentDidMount (){
    console.log('compontent did mount');
    this.loadActions();
  }

  render() {
    var score_list = _.sortBy(this.state.actions, 'score');
    var project_list = _.groupBy(this.state.actions, function(a){return a.project_name;});

    return (
      <UI.Card className="">
        <UI.Tabs>
            <UI.Tab label="Actions by Project">
        <div style={{height: '500px', overflow: 'auto'}}>
                <Project actions={project_list} />
        </div>
            </UI.Tab>

            <UI.Tab label="Actions by Score">
        <div style={{height: '500px', overflow: 'auto'}}>
                <Score actions={score_list} />
        </div>
            </UI.Tab>

            <UI.Tab label="Actions Table">
        <div style={{height: '500px', overflow: 'auto'}}>
                <Table actions={this.state.actions} />
        </div>
            </UI.Tab>
        </UI.Tabs>
      </UI.Card>
    );
  }
}

CardComponent.displayName = 'WidgetsActionsCardComponent';

// Uncomment properties you need
// ActionsCardComponent.propTypes = {};
// ActionsCardComponent.defaultProps = {};

export default CardComponent;
