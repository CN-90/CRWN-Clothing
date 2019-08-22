import { createSelector } from 'reselect';

const selectDirecetory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirecetory],
  directory => directory.sections
);
