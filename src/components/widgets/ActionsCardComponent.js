'use strict';

import React from 'react';
import $ from 'jQuery';
import _ from 'underscore';

require('styles/widgets/ActionsCard.less');
var actions = require('../../actions-data');

class ActionsCardComponent extends React.Component {
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
    var project_list = _.groupBy(this.state.actions, function(a){return a.project_name});
    console.log(project_list);
    console.log(score_list);

    var actionItems = this.state.actions.map(function(a) {
        return (
          <li key={a.id}>
            ID: {a.id} <br/>
            Name: {a.name} <br/>
            Complete: {a.complete} <br/>
            Type: {a.type} <br/>
            Status: {a.status} <br/>
            Contact: {a.contact} <br/>
            Manager: {a.managed_by} <br/>
            Assignee: {a.assigned_to} <br/>
            Score: {a.score} <br/>
          </li>
        );
    }.bind(this));

    return (
      <div className="">
        <ul>
        {actionItems}
        </ul>
      </div>
    );
  }
}

ActionsCardComponent.displayName = 'WidgetsActionsCardComponent';

// Uncomment properties you need
// ActionsCardComponent.propTypes = {};
// ActionsCardComponent.defaultProps = {};

export default ActionsCardComponent;
