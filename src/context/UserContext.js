import react,{ useState, createContext } from 'react';
import usersList from '../users.json';

export const UsersContext = createContext();

export const UsersProvider = (props) => {
    const [users, setUsers] = useState([
        {
          "id": 1,
          "name": "Patricia Lebsack",
          "isClicked": true,
          "taskDate": "",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "date": "2021-01-01",
          "expired": true,
          "message": "hi its me, can we meet at 1pm?",
          "activity": "we have 1 hour free gym!",
          "image": 'logo192.png',
          "more": "assets/more-24px.svg",               
        },
        {
          "id": 2,
          "name": "Leanne Graham",
          "isClicked": true,
          "taskDate": "",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "date": "2021-01-28",
          "expired": true,
          "message": "can we meet at 3pm?",
          "activity": "free FED lecture",
          "image": 'logo192.png',     
        },
        {
          "id": 3,
          "name": "Clementine Bau",
          "isClicked": false,
          "taskDate": "",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "date": "2021-02-21",
          "expired": false,
          "message": "call me please",
          "activity": "new product",
          "image": 'logo192.png'
        },
        {
          "id": 4,
          "name": "Ervin Howell",
          "isClicked": false,
          "taskDate": "",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "date": "2021-03-01",
          "expired": false,
          "message": "did you get my message?",
          "activity": "free activities",
          "image": 'logo192.png'
        }
      ])
      console.log(users)

    return (
        <UsersContext.Provider value={{users, setUsers}}>
            {props.children}
        </UsersContext.Provider> 
    )
        
}