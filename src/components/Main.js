require('normalize.css');
require('styles/App.css');

import React from 'react';
import TimelogCard from './widgets/timelogs/CardComponent';
import ActionsCard from './widgets/actions/CardComponent';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding: '20px'}} className="appContainer">
        <ActionsCard />
      </div>
    );
  }
}

//AppComponent.defaultProps = {};

export default AppComponent;
