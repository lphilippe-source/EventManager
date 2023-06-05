export class OrderList {
  exec (array: number[]): number[] {
    return array.sort((a, b) => a - b)
  }
}
