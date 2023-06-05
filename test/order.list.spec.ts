import { OrderList } from '@application/order.list'

describe('fonction de tri croissant', () => {
  const orderList = new OrderList()
  it('should return empty list', () => {
    expect(orderList.exec([])).toStrictEqual([])
  })

  it('should return [1,2]', () => {
    expect(orderList.exec([2, 1])).toStrictEqual([1, 2])
  })

  it('should return [1,2,5.12,15,10023]', () => {
    expect(orderList.exec([2, 1, 10023, 5.12, 15])).toStrictEqual([1, 2, 5.12, 15, 10023])
  })
})
