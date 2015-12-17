import $ from 'jquery';
import{ CREATE_TIMELOG, STOP_TIMELOG, EDIT_TIMELOG_NOTE, FETCH_TIMELOGS } from '../actions/TimelogActions';

function ajaxTimelogs(url = 'timelogs.json', callback) {
  var data;
  var fetch;
  fetch = new XMLHttpRequest();

  fetch.onreadystatechange = function() {
    if (fetch.readyState == XMLHttpRequest.DONE ) {
      if(fetch.status == 200){
        var data = JSON.parse(fetch.responseText);
        console.log(data);
        if (callback) callback(data);

      }
      else if(fetch.status == 404) {
        data = {
          error: 'There was an error 404'
        };
        console.log(data);
      }
      else {
        data = {
          error: 'something else other than 200 was returned'
        };
        console.log(data);
      }
    }
  };

  fetch.open("GET", url, true);
  fetch.send();

  return data;
}

var defaultState = ajaxTimelogs('timelogs.json', function (data) {
  return data;
});

export default function timelogReducer(state = defaultState, action) {
  switch (action.type) {

    case CREATE_TIMELOG:
      var new_timelog = state;
      new_timelog.timelogs.push(action.timelog);
      return new_timelog;

    case STOP_TIMELOG:
      return state;

    case EDIT_TIMELOG_NOTE:
      return state;

    case FETCH_TIMELOGS:
      var new_fetch = ajaxTimelogs('timelogs.json', function (data) {
        return data;
      });
      return new_fetch;

    default:
      return state;
  }
}
