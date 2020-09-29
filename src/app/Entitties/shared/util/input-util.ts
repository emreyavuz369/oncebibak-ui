export class InputUtil {
  static isNullOrUndefined(value: any): boolean {
    return value === undefined || value === null;
  }

  static isDefined(value: any): boolean {
    return !InputUtil.isNullOrUndefined(value);
  }
}
