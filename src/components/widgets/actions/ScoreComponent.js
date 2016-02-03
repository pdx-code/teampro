'use strict';

import React from 'react';

require('styles/widgets/actions/Score.less');

class ScoreComponent extends React.Component {
  render() {
    var actionItems = this.props.actions.map(function(a) {
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
      <div className="score-component">
        <ul>{actionItems}</ul>
      </div>
    );
  }
}

ScoreComponent.displayName = 'WidgetsActionsScoreComponent';

// Uncomment properties you need
// ScoreComponent.propTypes = {};
// ScoreComponent.defaultProps = {};

export default ScoreComponent;
