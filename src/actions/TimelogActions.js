//----------------------------------------
// action types
//----------------------------------------
export const CREATE_TIMELOG = 'CREATE_TIMELOG';
export const STOP_TIMELOG = 'STOP_TIMELOG';
export const EDIT_TIMELOG_NOTE = 'EDIT_TIMELOG_NOTE';
export const FETCH_TIMELOGS = 'FETCH_TIMELOGS';

//----------------------------------------
// other constants
//----------------------------------------

//----------------------------------------
// action creators
//----------------------------------------
export function createTimelog(timelog) {
  return {
    type: CREATE_TIMELOG,
    timelog
  }
}

export function stopTimelog(timelog) {
  return {
    type: STOP_TIMELOG,
    timelog
  }
}

export function editTimelogNote(timelog) {
  return {
    type: EDIT_TIMELOG_NOTE,
    timelog
  }
}

export function fetchTimelogs(filter) {
  return {
    type: FETCH_TIMELOGS,
    filter
  }
}
