import * as moment from 'moment';

export enum Format {
  default = 'YYYY/MM/DD, HH:mm',
  days = 'YYYY/MM/DD',
  seconds = 'YYYY/MM/DD, HH:mm:ss'
}

export const display = (date: string, format = Format.default): string =>
  moment(date).format(format);

export const getMonths = (dates: string[], language: string): string[] =>
  dates.map((date) => moment(date).locale(language).format('MMM'));

export const getWeeks = (dates: string[]): string[] =>
  dates.map((date) => moment(date).format('DD.MM'));
