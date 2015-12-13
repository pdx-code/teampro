'use strict';

import React from 'react';
import UI from 'material-ui'

require('styles/widgets/timelogs/List.less');

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  _startTimer (t, a) {
    console.log('starting ...');
  }

  render() {

    var timelogItems = this.props.timelogs.map(function(a) {
      return (
        <div key={a.id}>

          <UI.ListItem
            primaryText={a.title}
            secondaryText={'32 minutes ago - '+a.time}
            leftIcon={<UI.FontIcon className="material-icons">{a.icon}</UI.FontIcon>}
            rightIconButton={
              <UI.FloatingActionButton onTouchTap={this._startTimer.bind(this, a.id)} mini={true} secondary={true}>
                <UI.FontIcon className="material-icons">alarm_add</UI.FontIcon>
              </UI.FloatingActionButton>
            }
          >
          </UI.ListItem>
          <UI.ListDivider key={a.id*2} inset={false} />
        </div>
      );
    }.bind(this));

    return (
      <UI.List>
        {timelogItems}
      </UI.List>
    );
  }
}

ListComponent.displayName = 'WidgetsTimelogListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
