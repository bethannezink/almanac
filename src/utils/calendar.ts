import { addDays, format, subDays, parseISO } from 'date-fns';

const lastFrostDate = '2020-06-01';

export function formatDate(date: Date) {
  return format(date, 'M/d');
}

export function getSowDate(numDays: number) {
  let sowDate = parseISO(lastFrostDate, { additionalDigits: 1 });

  if (numDays > 0) {
    sowDate = subDays(sowDate, numDays);
  } else if (numDays < 0) {
    sowDate = addDays(sowDate, numDays);
  }

  return sowDate;
}

export function getGerminationDate(sowDate: Date, numDaysToGermination: number) {
  return addDays(sowDate, numDaysToGermination);
}