import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  //function to expect the username and userage which then is added to a new list.
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      //return array of the previous list and add the most recent submission
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
    {/* props created in the parent component to be called/used by the child */}
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
    </div>
  );
}

export default App;
