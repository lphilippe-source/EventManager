describe('merge sort', () => {
  it('should sort an array of numbers', () => {
    const array = [1, 5, 3, 2, 4]
    const sorted = [1, 2, 3, 4, 5]
    expect(array.sort((a, b) => a - b)).toEqual(sorted)
  })
})
