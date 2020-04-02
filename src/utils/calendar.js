import { addDays, format, subDays, parseISO } from 'date-fns';

const lastFrostDate = parseISO('2020-06-01', 1);

export function getSowDate(numDays) {
  let sowDate = lastFrostDate;

  if (numDays > 0) {
    sowDate = subDays(sowDate, numDays);
  } else if (numDays < 0) {
    sowDate = addDays(sowDate, numDays);
  }

  return format(sowDate, 'MM/dd/yyyy');
}

export function getGerminationDate(numDays) {
  // let sowDate = lastFrostDate;

  // if (numDays > 0) {
  //   sowDate = subDays(sowDate, numDays);
  // } else if (numDays < 0) {
  //   sowDate = addDays(sowDate, numDays);
  // }

  // return format(sowDate, 'MM/dd/yyyy');
}