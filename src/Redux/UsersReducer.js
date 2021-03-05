import { SET_USER_DETAILS, API_START, API_END, FETCH_USER_DETAILS } from "../actions/types";

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

const usersReduser = (state = initialState, action) => {

  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_USER_DETAILS:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_USER_DETAILS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_USER_DETAILS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
export default usersReduser