var Alt = require('alt');
var alt = new Alt();
import TimelogsActions from '../actions/TimelogsActions';


export class TimelogsStore {

  constructor() {
    this.timelogs = {};
     this.bindListeners({
       handleFetchTimelogs: TimelogsActions.FETCH_TIMELOGS
     });
  }

  handleFetchTimelogs(timelogs) {
    this.timelogs = timelogs;
  }
}

export default alt.createStore(TimelogsStore, 'TimelogsStore');
