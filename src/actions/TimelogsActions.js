var Alt = require('alt');
var alt = new Alt();

class TimelogsActions {
  fetchTimelogs(timelogs) {
    return timelogs;
  }
}

export default alt.createActions(TimelogsActions);
