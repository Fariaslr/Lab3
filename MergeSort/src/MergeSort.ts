import { DataType } from "./DataType";

export class MergeSort<T extends DataType> {
  public sort(array: T[]): T[] {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return this.merge(this.sort(left), this.sort(right));
  }

  private merge(left: T[], right: T[]): T[] {
    let result: T[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}
