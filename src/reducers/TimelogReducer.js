import{ FETCH_TIMELOGS } from '../actions/TimelogActions';

function ajax(url, callback) {
  var data;
  var fetch;
  fetch = new XMLHttpRequest();

  fetch.onreadystatechange = function() {
    if (fetch.readyState == XMLHttpRequest.DONE ) {
      if(fetch.status == 200){
        var data = JSON.parse(fetch.responseText);
        console.log('---------------------- ajax response ');
        console.log(data);
        if (callback) callback(data);

      }
      else if(fetch.status == 404) {
        data = {
          error: 'There was an error 404'
        };
        console.log('---------------------- ajax response ');
        console.log(data);
      }
      else {
        data = {
          error: 'something else other than 200 was returned'
        };
        console.log('---------------------- ajax response ');
        console.log(data);
      }
    }
  };

  fetch.open("GET", url, true);
  fetch.send();

  return data;
}

var defaultState = ajax('timelogs.json', function (return_data) { return return_data; });

export default function timelogReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_TIMELOGS:
      var new_state = ajax('timelogs.json', function (return_data) {
        console.log('Fetch timelogs was run');
        return return_data;
      });
      return new_state;

    default:
      return state;
  }
}
