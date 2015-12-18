export const CREATE_TIMELOG = 'CREATE_TIMELOG';
export const STOP_TIMELOG = 'STOP_TIMELOG';
export const EDIT_TIMELOG_NOTE = 'EDIT_TIMELOG_NOTE';
export const FETCH_TIMELOGS = 'FETCH_TIMELOGS';

export function fetchTimelogs(filter) {
  return {
    type: FETCH_TIMELOGS,
    filter
  }
}
