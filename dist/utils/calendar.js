import { addDays, format, subDays, parseISO } from 'date-fns';
var lastFrostDate = '2020-06-01';
export function formatDate(date) {
    return format(date, 'M/d');
}
export function getSowDate(numDays) {
    var sowDate = parseISO(lastFrostDate, { additionalDigits: 1 });
    if (numDays > 0) {
        sowDate = subDays(sowDate, numDays);
    }
    else if (numDays < 0) {
        sowDate = addDays(sowDate, numDays);
    }
    return sowDate;
}
export function getGerminationDate(sowDate, numDaysToGermination) {
    return addDays(sowDate, numDaysToGermination);
}
//# sourceMappingURL=calendar.js.map