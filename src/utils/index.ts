export enum Color {
  RED_100 = '#e84a5f',
  RED_200 = '#d83a4f',
  GRAY_100 = '#222',
  GRAY_300 = '#666',
  GRAY_400 = '#888',
  GRAY_500 = '#aaa',
  GRAY_600 = '#ccc',
  GRAY_650 = '#ddd',
  GRAY_700 = '#eeeeee',
  GRAY_800 = '#f6f6f6',
  GRAY_900 = '#ffffff',
  PURPLE_100 = '#b793c1',
  PURPLE_200 = '#bdb9ca',
}

export const MAXIMUM_WIDTH = 780;

export const SPLIT_DATE_FORMAT = /[\-\+ :T]/

export function translateDate(time: string): number[] {
  return time.split(SPLIT_DATE_FORMAT).map((it) => Number(it.includes('.') ? it.split('.')[0] : it))
}

export function toDate(time: string): Date {
  const result = translateDate(time)
  return new Date(result[0], result[1] - 1, result[2], result[3], result[4], result[5])
}

export function getTime(date: string): [string, string, string] {
  const translate = date.split(/[\-\+ :T]/)
  return [translate[0] || '0', translate[1] || '0', translate[2] || '0']
}
