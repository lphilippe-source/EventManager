import { FizzBuzz } from '@application/fizz.buzz'

describe('fizzbuzz', () => {
  const fizzBuzz = new FizzBuzz()
  it('should return number', () => {
    expect(typeof fizzBuzz.start('1')).toBe('number')
  })

  it('should return 1', () => {
    const result = '1'
    expect(fizzBuzz.start(result)).toBe(1)
  })
  it('should return 2', () => {
    const result = '2'
    expect(fizzBuzz.start(result)).toBe(2)
  })

  it('should return Fizz', () => {
    const result = '3'
    expect(fizzBuzz.start(result)).toBe('Fizz')
  })

  it('should return Buzz', () => {
    const result = '5'
    expect(fizzBuzz.start(result)).toBe('Buzz')
  })

  it('should return Fizz', () => {
    const result = '6'
    expect(fizzBuzz.start(result)).toBe('Fizz')
  })

  it('should return Buzz', () => {
    const result = '10'
    expect(fizzBuzz.start(result)).toBe('Buzz')
  })

  it('should return FizzBuzz', () => {
    const result = '15'
    expect(fizzBuzz.start(result)).toBe('FizzBuzz')
  })

  it('should return FizzBuzz', () => {
    const result = '30'
    expect(fizzBuzz.start(result)).toBe('FizzBuzz')
  })
})
