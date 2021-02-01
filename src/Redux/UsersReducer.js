let initialState = [
    {
      id: 1,
      name: 'Leanne Graham',
      position: 'Manager',
      phone: '1-770-736-8031 x56442',
      login: 'Bret',
      email: 'Sincere@april.biz',
      password: '3333'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      position: 'Manager',
      phone: '010-692-6593 x09125',
      login: 'Antonette',
      password: '2222'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      position: 'Director',
      phone: '1-463-123-4447',
      login: 'Samantha',
      password: '1111'
    }
  ]

const usersReduser = (state = initialState) => {
  return state
}

export default usersReduser