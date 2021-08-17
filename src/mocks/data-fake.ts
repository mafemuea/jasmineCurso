import { of } from 'rxjs';


export const USER_LIST_DATA = [
  {
    "login": "mojombo",
    "id": 1,
    "type": "User",
    "site_admin": false
  },
  {
    "login": "defunkt",
    "id": 2,
    "type": "User",
    "site_admin": false
  }
]

export const getAllUserList = () => (of(USER_LIST_DATA))
