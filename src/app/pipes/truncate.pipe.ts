import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  /**
   * @param value This is the string value on which truncate pipe will get applied.
   * @param args : [limit, trail]. First value is limit, second one is the trail string, by default it will be '...'
   * Returns string = Value.substring(limit) + trail
   */
  transform(value: string, args: string[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    const trail = args.length > 1 ? args[1] : '...';
    return value && value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
