import reducer from './reducer'

describe('reducer', () => {
  test('LOAD_CITIES', () => {
    const state = []
    const action = {
      type: 'LOAD_CITIES',
      cities: ["Chicago", "São Paulo", "München"]
    }

    const newState = reducer(state, action)

    expect(newState).toEqual(["Chicago", "São Paulo", "München"])
  })

  test('ADD_CITY', () => {
    const state = [
      { id: 1, name: "Chicago", isActive: true },
      { id: 2, name: "São Paulo", isActive: true },
      { id: 3, name: "München", isActive: false }
    ]

    const action = {
      type: 'ADD_CITY',
      cityID: "3"
     }

    const newState = reducer(state, action)

    expect(newState).toEqual([
      { id: 1, name: "Chicago", isActive: true },
      { id: 2, name: "São Paulo", isActive: true },
      { id: 3, name: "München", isActive: true }
    ])
  })

  test('REMOVE_CITY', () => {
    const state = [
      { id: 1, name: "Chicago", isActive: true },
      { id: 2, name: "São Paulo", isActive: true },
      { id: 3, name: "München", isActive: true }
    ]

    const action = {
      type: 'REMOVE_CITY',
      cityID: 2
     }

    const newState = reducer(state, action)

    expect(newState).toEqual([
      { id: 1, name: "Chicago", isActive: true },
      { id: 2, name: "São Paulo", isActive: false },
      { id: 3, name: "München", isActive: true }
    ])
  })

  test('ORDER_CITIES_BY_MAX_TEMPERATURE', () => {
    const state = [
      { id: 1, name: "Chicago", tempMax: 10 },
      { id: 2, name: "São Paulo", tempMax: 20 },
      { id: 3, name: "München", tempMax: 5 }
    ]

    const action = {
      type: 'ORDER_CITIES_BY_MAX_TEMPERATURE'
     }

    const newState = reducer(state, action)

    expect(newState).toEqual([
      { id: 2, name: "São Paulo", tempMax: 20 },
      { id: 1, name: "Chicago", tempMax: 10 },
      { id: 3, name: "München", tempMax: 5 }
    ])
  })
})
