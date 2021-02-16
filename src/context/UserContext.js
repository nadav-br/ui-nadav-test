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
          "message": "hi its me, can we meet at 1pm?",
          "activity": "free activities",
          "image": "assets/image2.jpg",
          "more": require("../assets/more-24px.svg"),   
            
        },
        {
          "id": 2,
          "name": "Leanne Graham",
          "isClicked": true,
          "taskDate": "",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "date": "2021-01-28",
          "message": "hi its me, can we meet at 1pm?",
          "activity": "free activities"         
        },
        {
          "id": 3,
          "name": "Clementine Bau",
          "isClicked": false,
          "taskDate": "",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "date": "2021-02-21",
          "message": "hi its me, can we meet at 1pm?",
          "activity": "free activities"
        },
        {
          "id": 4,
          "name": "Ervin Howell",
          "isClicked": false,
          "taskDate": "",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "date": "2021-03-01",
          "message": "hi its me, can we meet at 1pm?",
          "activity": "free activities"   
        }
      ])
      console.log(users)

    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {props.children}
        </UsersContext.Provider> 
    )
        
}