import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe  implements PipeTransform {
  /**
   * Sort the array acc to fav value
   * @param array Array on which sorting has to be applied
   * @param field Name of the field 
   * @returns 
   */
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field]) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}