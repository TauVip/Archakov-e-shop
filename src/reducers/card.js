const initialState = {
  items: [
    {
      id: 0,
      title: 'Происхождение',
      author: 'Дэн Браун',
      image:
        'https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg',
      price: 710,
      rating: 3
    },
    {
      id: 0,
      title: 'Происхождение',
      author: 'Дэн Браун',
      image:
        'https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg',
      price: 710,
      rating: 3
    },
    {
      id: 0,
      title: 'Происхождение',
      author: 'Дэн Браун',
      image:
        'https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg',
      price: 710,
      rating: 3
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'REMOVE_BOOK':
      return {
        ...state,
        items: state.items.filter(o => o.id !== action.payload)
      }
    default:
      return state
  }
}
