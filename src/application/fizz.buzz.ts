export class FizzBuzz {
  start (number: string): number | string {
    if (Number(number) % 15 === 0) { return 'FizzBuzz' }
    if (Number(number) % 3 === 0) { return 'Fizz' }
    if (Number(number) % 5 === 0) { return 'Buzz' }
    return Number(number)
  }
}
