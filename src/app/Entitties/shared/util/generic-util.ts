import {InputUtil} from './input-util';

export const calculatePercentage = (value: number, total: number): number => {
  if (InputUtil.isNullOrUndefined(value) || InputUtil.isNullOrUndefined(total) || total === 0) {
    return 0;
  }
  return Math.round((value / total) * 100);
};
