// utils/date.ts
import {
  format,
  parseISO,
  isBefore,
  isAfter,
  differenceInDays,
} from "date-fns";

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "MMMM dd, yyyy"); // Customize format as needed
};

// const formattedDate = formatDate("2024-11-05");
// console.log(formattedDate);

export const isToday = (dateString: string): boolean => {
  const date = parseISO(dateString);
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};

// const checkToday = isToday("2024-11-05");
// console.log(checkToday);

export const isPast = (dateString: string): boolean => {
  const date = parseISO(dateString);
  return isBefore(date, new Date());
};

// const checkPast = isPast("2024-11-01");
// console.log(checkPast);

export const isFuture = (dateString: string): boolean => {
  const date = parseISO(dateString);
  return isAfter(date, new Date());
};

// const checkFuture = isFuture("2024-12-01");
// console.log(checkFuture);

export const daysBetween = (
  startDateString: string,
  endDateString: string
): number => {
  const startDate = parseISO(startDateString);
  const endDate = parseISO(endDateString);
  return differenceInDays(endDate, startDate);
};

// const daysDiff = daysBetween("2024-11-01", "2024-11-05");
// console.log(daysDiff);

export const formatDateWithOptions = (
  dateString: string,
  dateFormat: string
): string => {
  const date = parseISO(dateString);
  return format(date, dateFormat);
};

// const customFormattedDate = formatDateWithOptions("2024-11-05", "dd/MM/yyyy");
// console.log(customFormattedDate);
