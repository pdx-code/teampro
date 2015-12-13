'use strict';
require('styles/widgets/timelogs/Table.less');

import React from 'react';
import UI from 'material-ui'

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px'
    }
  }

  render() {
    var tableRows = this.props.timelogs.map(function(a) {
      return (
        <UI.TableRow key={a.id} selected={true}>
          <UI.TableRowColumn>
            <UI.FontIcon className="material-icons" style={{fontSize: '12px'}}>flag</UI.FontIcon>
            {a.title}
          </UI.TableRowColumn>
          <UI.TableRowColumn>D. Finney</UI.TableRowColumn>
          <UI.TableRowColumn>{a.time}</UI.TableRowColumn>
          <UI.TableRowColumn>01/01/2015</UI.TableRowColumn>
        </UI.TableRow>
      );
    }.bind(this));

    return (
      <UI.Table
        className="timelogTable"
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        selectable={this.state.selectable}
        multiSelectable={this.state.multiSelectable}
        onRowSelection={this._onRowSelection}>

        <UI.TableHeader enableSelectAll={this.state.enableSelectAll}>
          <UI.TableRow>
            <UI.TableHeaderColumn tooltip='Timelog Name'>Name</UI.TableHeaderColumn>
            <UI.TableHeaderColumn tooltip='Timelog User'>User</UI.TableHeaderColumn>
            <UI.TableHeaderColumn tooltip='Time Elapesed'>Elapsed</UI.TableHeaderColumn>
            <UI.TableHeaderColumn tooltip='When the log was closed'>Closed</UI.TableHeaderColumn>
          </UI.TableRow>
        </UI.TableHeader>

        <UI.TableBody
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}>
          {tableRows}
        </UI.TableBody>
      </UI.Table>
    );
  }
}

TableComponent.displayName = 'WidgetsTimelogTableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;
